// NVC Feelings organized by Circumplex Model (Russell & Feldman Barrett)
// Two dimensions: Valence (pleasant/unpleasant) and Arousal (high/low activation)
const feelings = {
    // Quadrant 1: High Arousal + Pleasant (Activated Pleasant)
    highPleasant: [
        'excited', 'energetic', 'exhilarated', 'enthusiastic', 'inspired',
        'joyful', 'amazed', 'surprised', 'stimulated', 'alive', 'engaged',
        'radiant', 'delighted', 'amused', 'curious'
    ],
    // Quadrant 2: High Arousal + Unpleasant (Activated Unpleasant)
    highUnpleasant: [
        'angry', 'anxious', 'frustrated', 'stressed', 'tense', 'nervous',
        'overwhelmed', 'irritated', 'impatient', 'upset', 'annoyed',
        'distressed', 'troubled', 'restless', 'shocked', 'scared', 'afraid'
    ],
    // Quadrant 3: Low Arousal + Unpleasant (Deactivated Unpleasant)
    lowUnpleasant: [
        'sad', 'lonely', 'disappointed', 'discouraged', 'hopeless', 'hurt',
        'depleted', 'exhausted', 'weary', 'fatigue', 'numb', 'disconnected',
        'embarrassed', 'vulnerable', 'hesitant', 'confused', 'puzzled',
        'reluctant', 'uncomfortable', 'uneasy', 'worried', 'concerned'
    ],
    // Quadrant 4: Low Arousal + Pleasant (Deactivated Pleasant)
    lowPleasant: [
        'peaceful', 'calm', 'relaxed', 'content', 'satisfied', 'comfortable',
        'secure', 'relieved', 'trusting', 'grateful', 'thankful', 'tender',
        'warm', 'loving', 'affectionate', 'moved', 'touched', 'open',
        'fulfilled', 'glad', 'happy', 'hopeful', 'confident', 'optimistic',
        'proud', 'encouraged', 'wonderful'
    ],
};

// NVC Universal Human Needs
const needs = {
    connection: [
        'acceptance', 'affection', 'appreciation', 'belonging', 'closeness',
        'communication', 'companionship', 'compassion', 'connection', 'consideration',
        'consistency', 'cooperation', 'empathy', 'inclusion', 'intimacy',
        'love', 'mutuality', 'nurturing', 'respect', 'safety', 'security',
        'stability', 'support', 'to know and be known', 'to see and be seen',
        'to understand and be understood', 'trust', 'warmth'
    ],
    physical: [
        'air', 'food', 'movement', 'rest', 'shelter', 'touch', 'water',
        'health', 'physical safety', 'comfort', 'sexual expression'
    ],
    autonomy: [
        'autonomy', 'freedom', 'independence', 'space', 'spontaneity',
        'self-expression', 'authenticity', 'dignity', 'integrity'
    ],
    meaning: [
        'awareness', 'celebration', 'challenge', 'clarity', 'competence',
        'consciousness', 'contribution', 'creativity', 'discovery',
        'effectiveness', 'growth', 'hope', 'learning', 'mourning',
        'participation', 'purpose', 'self-expression', 'stimulation',
        'to matter', 'understanding', 'beauty', 'harmony', 'inspiration',
        'order', 'peace', 'play', 'joy'
    ]
};

// Quasi-feelings and their translations
const quasiFeelings = {
    'abandoned': {
        feelings: ['lonely', 'scared', 'sad', 'hurt', 'vulnerable'],
        needs: ['connection', 'belonging', 'support', 'closeness', 'care']
    },
    'attacked': {
        feelings: ['scared', 'angry', 'frustrated', 'hurt', 'defensive'],
        needs: ['safety', 'respect', 'understanding', 'consideration']
    },
    'betrayed': {
        feelings: ['angry', 'hurt', 'disappointed', 'sad', 'shocked'],
        needs: ['trust', 'honesty', 'reliability', 'respect', 'integrity']
    },
    'blamed': {
        feelings: ['angry', 'frustrated', 'defensive', 'confused', 'hurt'],
        needs: ['understanding', 'fairness', 'respect', 'to be seen']
    },
    'bullied': {
        feelings: ['scared', 'angry', 'hurt', 'powerless', 'anxious'],
        needs: ['safety', 'respect', 'autonomy', 'consideration']
    },
    'cheated': {
        feelings: ['angry', 'hurt', 'disappointed', 'resentful'],
        needs: ['fairness', 'honesty', 'trust', 'respect', 'integrity']
    },
    'criticized': {
        feelings: ['hurt', 'defensive', 'frustrated', 'embarrassed'],
        needs: ['understanding', 'respect', 'acceptance', 'appreciation']
    },
    'diminished': {
        feelings: ['hurt', 'frustrated', 'angry', 'embarrassed'],
        needs: ['respect', 'appreciation', 'to be seen', 'acknowledgment']
    },
    'ignored': {
        feelings: ['lonely', 'hurt', 'frustrated', 'sad', 'invisible'],
        needs: ['connection', 'to be seen', 'acknowledgment', 'consideration', 'mattering']
    },
    'intimidated': {
        feelings: ['scared', 'anxious', 'uncomfortable', 'tense'],
        needs: ['safety', 'equality', 'respect', 'space']
    },
    'invisible': {
        feelings: ['lonely', 'sad', 'frustrated', 'disconnected'],
        needs: ['to be seen', 'acknowledgment', 'connection', 'mattering']
    },
    'judged': {
        feelings: ['hurt', 'defensive', 'frustrated', 'misunderstood'],
        needs: ['acceptance', 'understanding', 'respect', 'to be seen']
    },
    'manipulated': {
        feelings: ['angry', 'confused', 'powerless', 'resentful'],
        needs: ['autonomy', 'trust', 'honesty', 'clarity', 'respect']
    },
    'misunderstood': {
        feelings: ['frustrated', 'lonely', 'disappointed', 'disconnected'],
        needs: ['understanding', 'clarity', 'to be heard', 'connection']
    },
    'neglected': {
        feelings: ['lonely', 'sad', 'hurt', 'frustrated'],
        needs: ['care', 'consideration', 'support', 'to matter', 'attention']
    },
    'pressured': {
        feelings: ['anxious', 'overwhelmed', 'stressed', 'tense'],
        needs: ['space', 'autonomy', 'choice', 'ease', 'consideration']
    },
    'provoked': {
        feelings: ['angry', 'frustrated', 'irritated', 'defensive'],
        needs: ['respect', 'consideration', 'peace', 'space']
    },
    'rejected': {
        feelings: ['hurt', 'sad', 'lonely', 'disappointed', 'vulnerable'],
        needs: ['acceptance', 'belonging', 'connection', 'appreciation']
    },
    'used': {
        feelings: ['angry', 'hurt', 'resentful', 'frustrated'],
        needs: ['respect', 'consideration', 'mutuality', 'appreciation']
    },
    'unheard': {
        feelings: ['frustrated', 'lonely', 'disappointed', 'disconnected'],
        needs: ['to be heard', 'understanding', 'consideration', 'connection']
    },
    'unseen': {
        feelings: ['lonely', 'sad', 'frustrated', 'disconnected'],
        needs: ['to be seen', 'acknowledgment', 'connection', 'mattering']
    }
};

// Global state for selected items
let selectedFeelings = [];
let selectedNeeds = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initFeelingExplorer();
    initNeedsExplorer();
    initSentenceBuilder();
    initThoughtTransformer();
});

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
                
                div.addEventListener('click', () => {
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
                });
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
            
            div.addEventListener('click', () => {
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
            });
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
    const observationButtons = document.querySelectorAll('.obs-type-btn');
    const observationInput = document.getElementById('observation-input');
    const feelingDisplay = document.getElementById('feeling-display');
    const needDisplay = document.getElementById('need-display');
    const requestInput = document.getElementById('request-input');
    const sentenceResult = document.getElementById('constructed-sentence');
    
    let selectedObsType = 'see'; // Default value
    
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

        // Update display areas
        if (selectedFeelings.length > 0) {
            feelingDisplay.innerHTML = `<strong>${selectedFeelings.join(', ')}</strong>`;
        } else {
            feelingDisplay.innerHTML = '<em>Select feelings from the Feeling Circumplex above</em>';
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
            sentence += `When I ${obsType} ${obs}`;
        }
        
        if (feeling) {
            sentence += (sentence ? ', ' : '') + `I feel ${feeling}`;
        }
        
        if (need) {
            sentence += (sentence ? ' ' : '') + `because I need ${need}`;
        }
        
        if (sentence) {
            sentence += '.';
        }
        
        if (request) {
            sentence += ` Would you be willing to ${request}?`;
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
    
    // Remove selected class from all feeling items in circumplex
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
    const unpackBtn = document.getElementById('unpack-btn');
    const transformerResult = document.getElementById('transformer-result');

    // Populate quasi-feelings dropdown
    const quasiFeelingsList = Object.keys(quasiFeelings).sort();
    quasiFeelingsList.forEach(qf => {
        const option = document.createElement('option');
        option.value = qf;
        option.textContent = qf;
        quasiFeelingInput.appendChild(option);
    });

    unpackBtn.addEventListener('click', () => {
        const input = quasiFeelingInput.value.trim().toLowerCase();
        
        if (!input) {
            return;
        }

        const data = quasiFeelings[input];
        displayUnpackedResult(input, data.feelings, data.needs);
    });

    // Also unpack when selection changes
    quasiFeelingInput.addEventListener('change', () => {
        const input = quasiFeelingInput.value;
        if (input) {
            unpackBtn.click();
        }
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
            
            div.addEventListener('click', () => {
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
            });
            
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
            
            div.addEventListener('click', () => {
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
            });
            
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
