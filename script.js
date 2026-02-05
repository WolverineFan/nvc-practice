// Data is loaded from nvc-data.js
// Feelings, needs, and quasiFeelings are available globally

// Global state for selected items
let selectedFeelings = [];
let selectedNeeds = [];

// Scroll detection to prevent accidental taps on mobile
let isScrolling = false;
let scrollTimeout = null;
let touchStartY = 0;
let touchMoved = false;

function initScrollDetection() {
    // Track scroll state
    window.addEventListener('scroll', () => {
        isScrolling = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 150);
    }, { passive: true });

    // Track touch movement
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
        touchMoved = false;
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        const touchY = e.touches[0].clientY;
        if (Math.abs(touchY - touchStartY) > 10) {
            touchMoved = true;
        }
    }, { passive: true });
}

// Helper to check if tap should be ignored (user was scrolling)
function shouldIgnoreTap() {
    return isScrolling || touchMoved;
}

// Common function to create selectable items (feelings or needs)
function createSelectableItems(items, options) {
    const { className, selectedArray, container } = options;

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = className;
        div.textContent = item;

        // Check if already selected
        if (selectedArray.includes(item)) {
            div.classList.add('selected');
        }

        const toggleItem = (e) => {
            // Ignore if user was scrolling
            if (e.type === 'touchend' && shouldIgnoreTap()) {
                return;
            }
            e.preventDefault();
            div.classList.toggle('selected');

            // Update selection array
            if (div.classList.contains('selected')) {
                if (!selectedArray.includes(item)) {
                    selectedArray.push(item);
                }
            } else {
                const index = selectedArray.indexOf(item);
                if (index > -1) {
                    selectedArray.splice(index, 1);
                }
            }

            // Update sentence builder
            updateSentenceFromSelections();
        };

        div.addEventListener('click', (e) => { if (e.pointerType !== 'touch') toggleItem(e); });
        div.addEventListener('touchend', toggleItem);
        container.appendChild(div);
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initScrollDetection();
    initCollapsibleCards();
    initFeelingExplorer();
    initNeedsExplorer();
    initSentenceBuilder();
    initThoughtTransformer();
    initCopyButton();
});

// Collapsible Cards
function initCollapsibleCards() {
    const collapseButtons = document.querySelectorAll('.collapse-btn');
    collapseButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            card.classList.toggle('collapsed');
            // Update button text
            btn.textContent = card.classList.contains('collapsed') ? '+' : '−';
        });
    });

    // Collapse feeling explorer and needs explorer by default on mobile
    if (window.innerWidth <= 768) {
        const feelingExplorer = document.getElementById('feeling-explorer');
        const needsExplorer = document.getElementById('needs-explorer');

        if (feelingExplorer) {
            feelingExplorer.classList.add('collapsed');
            const btn = feelingExplorer.querySelector('.collapse-btn');
            if (btn) btn.textContent = '+';
        }

        if (needsExplorer) {
            needsExplorer.classList.add('collapsed');
            const btn = needsExplorer.querySelector('.collapse-btn');
            if (btn) btn.textContent = '+';
        }
    }
}

// Feeling Explorer
function initFeelingExplorer() {
    const searchInput = document.getElementById('feeling-search');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const quadrantContainers = {
        highPleasant: document.getElementById('feelings-q1'),
        highUnpleasant: document.getElementById('feelings-q2'),
        lowUnpleasant: document.getElementById('feelings-q3'),
        lowPleasant: document.getElementById('feelings-q4')
    };

    let currentCategory = 'all';

    // Render feelings in quadrants
    function renderFeelings(filterText = '') {
        const quadrantsToShow = currentCategory === 'all'
            ? ['highPleasant', 'highUnpleasant', 'lowUnpleasant', 'lowPleasant']
            : [currentCategory];

        // Toggle single-view class on container
        const quadrantsContainer = document.querySelector('.quadrants-container');
        if (currentCategory === 'all') {
            quadrantsContainer.classList.remove('single-view');
        } else {
            quadrantsContainer.classList.add('single-view');
        }

        // Clear all quadrants first
        Object.values(quadrantContainers).forEach(container => {
            container.innerHTML = '';
            container.parentElement.style.display = 'none';
        });

        quadrantsToShow.forEach(quadrant => {
            const container = quadrantContainers[quadrant];
            container.parentElement.style.display = 'block';

            let feelingsToShow = feelings[quadrant];

            // Filter by search text
            if (filterText) {
                feelingsToShow = feelingsToShow.filter(f =>
                    f.toLowerCase().includes(filterText.toLowerCase())
                );
            }

            // Sort alphabetically
            feelingsToShow.sort();

            createSelectableItems(feelingsToShow, {
                className: 'feeling-item',
                selectedArray: selectedFeelings,
                container: container
            });
        });
    }

    // Category buttons
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderFeelings(searchInput.value);
        });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        renderFeelings(e.target.value);
    });

    renderFeelings();
}

// Needs Explorer
function initNeedsExplorer() {
    const needsList = document.getElementById('needs-list');
    const categoryButtons = document.querySelectorAll('.needs-category-btn');

    let currentCategory = 'all';

    function renderNeeds() {
        needsList.innerHTML = '';

        let needsToShow = [];
        if (currentCategory === 'all') {
            needsToShow = Object.values(needs).flat();
        } else {
            needsToShow = needs[currentCategory];
        }

        // Sort alphabetically
        needsToShow.sort();

        createSelectableItems(needsToShow, {
            className: 'need-item',
            selectedArray: selectedNeeds,
            container: needsList
        });
    }

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.needsCategory;
            renderNeeds();
        });
    });

    renderNeeds();
}

// Sentence Builder
function initSentenceBuilder() {
    const perspectiveButtons = document.querySelectorAll('.perspective-btn');
    const observationButtons = document.querySelectorAll('.obs-type-btn');
    const observationInput = document.getElementById('observation-input');
    const feelingDisplay = document.getElementById('feeling-display');
    const needDisplay = document.getElementById('need-display');
    const requestInput = document.getElementById('request-input');
    const sentenceResult = document.getElementById('constructed-sentence');

    const observationLabel = document.getElementById('observation-label');
    const feelingLabel = document.getElementById('feeling-label');
    const needLabel = document.getElementById('need-label');
    const requestLabel = document.getElementById('request-label');

    let selectedObsType = 'see'; // Default value
    let selectedPerspective = 'self'; // Default: expressing self

    // Handle perspective toggle
    perspectiveButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            perspectiveButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedPerspective = btn.dataset.perspective;
            updateLabels();
            updateSentence();
        });
    });

    // Update labels based on perspective
    function updateLabels() {
        if (selectedPerspective === 'self') {
            observationLabel.textContent = 'When I...';
            feelingLabel.textContent = 'I feel...';
            needLabel.textContent = 'Because I need...';
            requestLabel.textContent = 'Would you be willing to...';
        } else {
            observationLabel.textContent = 'When you...';
            feelingLabel.textContent = 'You feel...';
            needLabel.textContent = 'Because you need...';
            requestLabel.textContent = 'Would you like...';
        }
    }

    // Handle observation type button clicks
    observationButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            observationButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedObsType = btn.dataset.obsType;
            updateSentence();
        });
    });

    // Update sentence
    function updateSentence() {
        const obsType = selectedObsType;
        const obs = observationInput.value.trim();
        const feeling = selectedFeelings.length > 0 ? selectedFeelings.join(' and ') : '';
        const need = selectedNeeds.length > 0 ? selectedNeeds.join(' and ') : '';
        const request = requestInput.value.trim();

        const pronoun = selectedPerspective === 'self' ? 'I' : 'you';
        const requestPrefix = selectedPerspective === 'self' ? 'Would you be willing to' : 'Would you like';

        // Update display areas
        if (selectedFeelings.length > 0) {
            feelingDisplay.innerHTML = `<strong>${selectedFeelings.join(', ')}</strong>`;
        } else {
            feelingDisplay.innerHTML = '<em>Select feelings from the Feeling Explorer above</em>';
        }

        if (selectedNeeds.length > 0) {
            needDisplay.innerHTML = `<strong>${selectedNeeds.join(', ')}</strong>`;
        } else {
            needDisplay.innerHTML = '<em>Select needs from the Basic Human Needs section above</em>';
        }

        const copyBtn = document.getElementById('copy-sentence-btn');

        if (!obs && !feeling && !need && !request) {
            sentenceResult.textContent = '';
            if (copyBtn) copyBtn.style.display = 'none';
            return;
        }

        let sentence = '';

        if (obs) {
            sentence += `When ${pronoun} ${obsType} ${obs}`;
        }

        if (feeling) {
            sentence += (sentence ? ', ' : '') + `${pronoun} feel ${feeling}`;
        }

        if (need) {
            sentence += (sentence ? ' ' : '') + `because ${pronoun} need ${need}`;
        }

        if (sentence) {
            sentence += '.';
        }

        if (request) {
            sentence += ` ${requestPrefix} ${request}?`;
        }

        sentenceResult.textContent = sentence;

        // Show copy button when there's content
        if (copyBtn && sentence) {
            copyBtn.style.display = 'flex';
        }
    }

    // Add event listeners
    [observationInput, requestInput].forEach(element => {
        element.addEventListener('input', updateSentence);
        element.addEventListener('change', updateSentence);
    });

    // Clear buttons
    document.getElementById('clear-feelings-btn').addEventListener('click', clearAllFeelings);
    document.getElementById('clear-needs-btn').addEventListener('click', clearAllNeeds);

    // Make updateSentence available globally
    window.updateSentenceBuilder = updateSentence;
}

// Global function to update sentence from feeling/need selections
function updateSentenceFromSelections() {
    if (typeof window.updateSentenceBuilder === 'function') {
        window.updateSentenceBuilder();
    }
}

// Clear all feeling selections
function clearAllFeelings() {
    selectedFeelings.length = 0;

    // Remove selected class from all feeling items in explorer
    document.querySelectorAll('.feeling-item.selected').forEach(item => {
        item.classList.remove('selected');
    });

    // Remove selected class from feeling items in thought transformer
    document.querySelectorAll('.suggestion-item.selected').forEach(item => {
        // Only clear if it's in the feelings list
        if (item.parentElement.id === 'transformer-feelings-list') {
            item.classList.remove('selected');
        }
    });

    // Update sentence builder
    updateSentenceFromSelections();
}

// Clear all need selections
function clearAllNeeds() {
    selectedNeeds.length = 0;

    // Remove selected class from all need items in needs explorer
    document.querySelectorAll('.need-item.selected').forEach(item => {
        item.classList.remove('selected');
    });

    // Remove selected class from need items in thought transformer
    document.querySelectorAll('.suggestion-item.selected').forEach(item => {
        // Only clear if it's in the needs list
        if (item.parentElement.id === 'transformer-needs-list') {
            item.classList.remove('selected');
        }
    });

    // Update sentence builder
    updateSentenceFromSelections();
}

// Thought Transformer
function initThoughtTransformer() {
    const quasiFeelingInput = document.getElementById('quasi-feeling-input');
    const transformerResult = document.getElementById('transformer-result');

    // Populate quasi-feelings dropdown
    const quasiFeelingsList = Object.keys(quasiFeelings).sort();
    quasiFeelingsList.forEach(qf => {
        const option = document.createElement('option');
        option.value = qf;
        option.textContent = qf;
        quasiFeelingInput.appendChild(option);
    });

    // Unpack when selection changes
    quasiFeelingInput.addEventListener('change', () => {
        const input = quasiFeelingInput.value.trim().toLowerCase();

        if (!input) {
            return;
        }

        const data = quasiFeelings[input];
        displayUnpackedResult(input, data.feelings, data.needs);
    });

    function displayUnpackedResult(quasiFeeling, feelingsSuggestions, needsSuggestions) {
        const html = `
            <div class="transformer-explanation">
                <p><strong>"${quasiFeeling}"</strong> is a quasi-feeling—it describes what you think someone did to you, not what's happening inside you. Let's explore the actual feelings and needs:</p>
            </div>
            <div class="transformer-result-content">
                <div class="feelings-suggestions">
                    <h4>Possible Feelings: <em style="font-size: 0.85rem; font-weight: normal;">(click to select)</em></h4>
                    <div class="suggestion-list" id="transformer-feelings-list"></div>
                </div>
                <div class="needs-suggestions">
                    <h4>Possible Needs: <em style="font-size: 0.85rem; font-weight: normal;">(click to select)</em></h4>
                    <div class="suggestion-list" id="transformer-needs-list"></div>
                </div>
            </div>
        `;
        transformerResult.innerHTML = html;

        // Create clickable feeling items
        const feelingsList = document.getElementById('transformer-feelings-list');
        createSelectableItems(feelingsSuggestions, {
            className: 'suggestion-item',
            selectedArray: selectedFeelings,
            container: feelingsList
        });

        // Create clickable need items
        const needsList = document.getElementById('transformer-needs-list');
        createSelectableItems(needsSuggestions, {
            className: 'suggestion-item',
            selectedArray: selectedNeeds,
            container: needsList
        });
    }

    function displayGenericResult(input) {
        const html = `
            <div class="transformer-explanation">
                <p><strong>"${input}"</strong> might be a quasi-feeling if it describes what you think someone did to you rather than what's happening inside you.</p>
                <p>Try to identify:
                    <ul style="margin-top: 10px; padding-left: 20px;">
                        <li>What are you actually <strong>feeling</strong> inside? (scared, angry, sad, hurt, etc.)</li>
                        <li>What <strong>need</strong> of yours is unmet? (safety, respect, understanding, connection, etc.)</li>
                    </ul>
                </p>
                <p style="margin-top: 10px;"><em>Tip: If the word requires someone else's action or judgment to be true, it's likely a quasi-feeling.</em></p>
            </div>
        `;
        transformerResult.innerHTML = html;
    }
}

// Copy to Clipboard Functionality
function initCopyButton() {
    const copyBtn = document.getElementById('copy-sentence-btn');
    const constructedSentence = document.getElementById('constructed-sentence');

    copyBtn.addEventListener('click', async () => {
        const text = constructedSentence.textContent;

        if (!text || text.trim() === '') return;

        try {
            await navigator.clipboard.writeText(text);

            // Visual feedback
            copyBtn.classList.add('copied');
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg>';

            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyBtn.innerHTML = originalHTML;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
}
