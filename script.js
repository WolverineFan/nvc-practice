// Data is loaded from nvc-data.js
// Feelings, needs, and quasiFeelings are available globally

// Global state for selected items
let selectedFeelings = [];
let selectedNeeds = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initCollapsibleCards();
    initFeelingExplorer();
    initNeedsExplorer();
    initSentenceBuilder();
    initThoughtTransformer();
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

            feelingsToShow.forEach(feeling => {
                const div = document.createElement('div');
                div.className = 'feeling-item';
                div.textContent = feeling;

                // Check if already selected
                if (selectedFeelings.includes(feeling)) {
                    div.classList.add('selected');
                }

                const toggleFeeling = (e) => {
                    e.preventDefault();
                    div.classList.toggle('selected');

                    // Update global selection
                    if (div.classList.contains('selected')) {
                        if (!selectedFeelings.includes(feeling)) {
                            selectedFeelings.push(feeling);
                        }
                    } else {
                        selectedFeelings = selectedFeelings.filter(f => f !== feeling);
                    }

                    // Update sentence builder
                    updateSentenceFromSelections();
                };

                div.addEventListener('click', toggleFeeling);
                div.addEventListener('touchend', toggleFeeling);
                container.appendChild(div);
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

        needsToShow.forEach(need => {
            const div = document.createElement('div');
            div.className = 'need-item';
            div.textContent = need;

            // Check if already selected
            if (selectedNeeds.includes(need)) {
                div.classList.add('selected');
            }

            const toggleNeed = (e) => {
                e.preventDefault();
                div.classList.toggle('selected');

                // Update global selection
                if (div.classList.contains('selected')) {
                    if (!selectedNeeds.includes(need)) {
                        selectedNeeds.push(need);
                    }
                } else {
                    selectedNeeds = selectedNeeds.filter(n => n !== need);
                }

                // Update sentence builder
                updateSentenceFromSelections();
            };

            div.addEventListener('click', toggleNeed);
            div.addEventListener('touchend', toggleNeed);
            needsList.appendChild(div);
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

        if (!obs && !feeling && !need && !request) {
            sentenceResult.textContent = '';
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
    selectedFeelings = [];

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
    selectedNeeds = [];

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
        feelingsSuggestions.forEach(feeling => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.textContent = feeling;

            // Check if already selected
            if (selectedFeelings.includes(feeling)) {
                div.classList.add('selected');
            }

            const toggleFeeling = (e) => {
                e.preventDefault();
                div.classList.toggle('selected');

                // Update global selection
                if (div.classList.contains('selected')) {
                    if (!selectedFeelings.includes(feeling)) {
                        selectedFeelings.push(feeling);
                    }
                } else {
                    selectedFeelings = selectedFeelings.filter(f => f !== feeling);
                }

                // Update sentence builder
                updateSentenceFromSelections();
            };

            div.addEventListener('click', toggleFeeling);
            div.addEventListener('touchend', toggleFeeling);

            feelingsList.appendChild(div);
        });

        // Create clickable need items
        const needsList = document.getElementById('transformer-needs-list');
        needsSuggestions.forEach(need => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.textContent = need;

            // Check if already selected
            if (selectedNeeds.includes(need)) {
                div.classList.add('selected');
            }

            const toggleNeed = (e) => {
                e.preventDefault();
                div.classList.toggle('selected');

                // Update global selection
                if (div.classList.contains('selected')) {
                    if (!selectedNeeds.includes(need)) {
                        selectedNeeds.push(need);
                    }
                } else {
                    selectedNeeds = selectedNeeds.filter(n => n !== need);
                }

                // Update sentence builder
                updateSentenceFromSelections();
            };

            div.addEventListener('click', toggleNeed);
            div.addEventListener('touchend', toggleNeed);

            needsList.appendChild(div);
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
