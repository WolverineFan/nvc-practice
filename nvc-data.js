// NVC Feelings organized by Circumplex Model (Russell & Feldman Barrett)
// Two dimensions: Valence (pleasant/unpleasant) and Arousal (high/low activation)
const feelings = {
    // Quadrant 1: High Arousal + Pleasant (Activated Pleasant)
    highPleasant: [
        'alive',
        'amazed',
        'amused',
        'animated',
        'aroused',
        'astonished',
        'awed',
        'blissful',
        'curious',
        'dazzled',
        'delighted',
        'eager',
        'ecstatic',
        'elated',
        'enchanted',
        'energetic',
        'energized',
        'engaged',
        'enlivened',
        'enthralled',
        'enthusiastic',
        'entranced',
        'exhilarated',
        'exuberant',
        'excited',
        'fascinated',
        'giddy',
        'inspired',
        'invigorated',
        'involved',
        'joyful',
        'jubilant',
        'lively',
        'passionate',
        'radiant',
        'rapturous',
        'spellbound',
        'stimulated',
        'surprised',
        'thrilled',
        'tickled',
        'vibrant',
        'wonder'
    ],
    // Quadrant 2: High Arousal + Unpleasant (Activated Unpleasant)
    highUnpleasant: [
        'afraid',
        'aggravated',
        'agitated',
        'alarmed',
        'angry',
        'annoyed',
        'anxious',
        'apprehensive',
        'distressed',
        'edgy',
        'enraged',
        'exasperated',
        'fidgety',
        'flustered',
        'frazzled',
        'frightened',
        'frustrated',
        'furious',
        'hostile',
        'impatient',
        'incensed',
        'indignant',
        'irate',
        'irked',
        'irritable',
        'irritated',
        'jittery',
        'livid',
        'nervous',
        'outraged',
        'overwhelmed',
        'panicked',
        'perturbed',
        'petrified',
        'rattled',
        'restless',
        'scared',
        'shaky',
        'shame',
        'shocked',
        'startled',
        'stressed',
        'stressed out',
        'tense',
        'terrified',
        'turbulent',
        'turmoil',
        'unnerved',
        'unsettled',
        'upset',
        'wary'
    ],
    // Quadrant 3: Low Arousal + Unpleasant (Deactivated Unpleasant)
    lowUnpleasant: [
        'agony',
        'alienated',
        'aloof',
        'anguished',
        'apathetic',
        'baffled',
        'beat',
        'bereaved',
        'bewildered',
        'bored',
        'burnt out',
        'cold',
        'concerned',
        'confused',
        'dazed',
        'dejected',
        'depleted',
        'depressed',
        'despair',
        'despondent',
        'detached',
        'devastated',
        'disappointed',
        'discombobulated',
        'disconcerted',
        'disconnected',
        'discouraged',
        'disgruntled',
        'disheartened',
        'dismayed',
        'displeased',
        'distant',
        'distracted',
        'distraught',
        'disturbed',
        'dread',
        'embarrassed',
        'exhausted',
        'fatigue',
        'foreboding',
        'forlorn',
        'fragile',
        'gloomy',
        'grief',
        'guarded',
        'guilty',
        'heartbroken',
        'heavy hearted',
        'helpless',
        'hesitant',
        'hopeless',
        'horrified',
        'hurt',
        'insecure',
        'jealous',
        'lethargic',
        'listless',
        'lonely',
        'longing',
        'lost',
        'melancholy',
        'miserable',
        'mistrustful',
        'mortified',
        'nostalgic',
        'numb',
        'pining',
        'puzzled',
        'regretful',
        'reluctant',
        'remorseful',
        'removed',
        'resentful',
        'reserved',
        'sad',
        'sleepy',
        'tired',
        'torn',
        'troubled',
        'uneasy',
        'uncomfortable',
        'unhappy',
        'uninterested',
        'vulnerable',
        'weary',
        'withdrawn',
        'worn out',
        'worried',
        'wretched'
    ],
    // Quadrant 4: Low Arousal + Pleasant (Deactivated Pleasant)
    lowPleasant: [
        'absorbed',
        'affectionate',
        'alert',
        'appreciative',
        'calm',
        'centered',
        'clear headed',
        'comfortable',
        'compassionate',
        'confident',
        'content',
        'empowered',
        'encouraged',
        'engrossed',
        'equanimous',
        'expectant',
        'friendly',
        'fulfilled',
        'glad',
        'grateful',
        'happy',
        'hopeful',
        'interested',
        'intrigued',
        'loving',
        'mellow',
        'moved',
        'open',
        'open hearted',
        'optimistic',
        'peaceful',
        'pleased',
        'proud',
        'quiet',
        'rejuvenated',
        'relaxed',
        'relieved',
        'renewed',
        'rested',
        'restored',
        'revived',
        'safe',
        'satisfied',
        'secure',
        'self-conscious',
        'sensitive',
        'serene',
        'still',
        'sympathetic',
        'tender',
        'thankful',
        'touched',
        'tranquil',
        'trusting',
        'warm',
        'wistful',
        'wonderful'
    ],
};

// NVC Universal Human Needs
const needs = {
    connection: [
        'acceptance',
        'affection',
        'appreciation',
        'belonging',
        'closeness',
        'communication',
        'communion',
        'community',
        'companionship',
        'compassion',
        'connection',
        'consideration',
        'consistency',
        'cooperation',
        'empathy',
        'equality',
        'inclusion',
        'intimacy',
        'love',
        'mutuality',
        'nurturing',
        'presence',
        'respect',
        'safety',
        'security',
        'self-respect',
        'sharing',
        'stability',
        'support',
        'to know and be known',
        'to see and be seen',
        'to understand and be understood',
        'trust',
        'warmth'
    ],
    physical: [
        'air',
        'ease',
        'exercise',
        'food',
        'movement',
        'relaxation',
        'rest',
        'sexual expression',
        'shelter',
        'sleep',
        'touch',
        'water'
    ],
    autonomy: [
        'authenticity',
        'autonomy',
        'choice',
        'freedom',
        'independence',
        'integrity',
        'self-expression',
        'space',
        'spontaneity'
    ],
    meaning: [
        'awareness',
        'beauty',
        'celebration of life',
        'challenge',
        'clarity',
        'competence',
        'consciousness',
        'contribution',
        'creativity',
        'discovery',
        'effectiveness',
        'efficacy',
        'growth',
        'harmony',
        'hope',
        'humor',
        'inspiration',
        'joy',
        'learning',
        'mourning',
        'order',
        'participation',
        'play',
        'purpose',
        'recognition',
        'stimulation',
        'to matter',
        'understanding'
    ]
};

// Quasi-feelings and their translations
const quasiFeelings = {
    'abandoned': {
        feelings: ['afraid', 'hurt', 'insecure', 'lonely', 'sad', 'scared', 'vulnerable'],
        needs: ['belonging', 'closeness', 'connection', 'safety', 'support']
    },
    'abused': {
        feelings: ['angry', 'devastated', 'grief', 'hurt', 'scared', 'shame', 'vulnerable'],
        needs: ['freedom', 'respect', 'safety', 'trust', 'understanding']
    },
    'attacked': {
        feelings: ['alert', 'angry', 'disturbed', 'frustrated', 'hurt', 'scared'],
        needs: ['consideration', 'freedom', 'respect', 'safety', 'space', 'trust', 'understanding']
    },
    'belittled': {
        feelings: ['angry', 'embarrassed', 'hurt', 'insecure', 'sad'],
        needs: ['appreciation', 'belonging', 'recognition', 'respect', 'to matter', 'to see and be seen']
    },
    'betrayed': {
        feelings: ['angry', 'dazed', 'disappointed', 'hurt', 'sad', 'shame', 'shocked', 'vulnerable'],
        needs: ['integrity', 'respect', 'safety', 'sharing', 'trust']
    },
    'blamed': {
        feelings: ['angry', 'confused', 'embarrassed', 'frustrated', 'hurt', 'lonely', 'shame', 'vulnerable'],
        needs: ['acceptance', 'consideration', 'respect', 'understanding']
    },
    'boxed-in': {
        feelings: ['anxious', 'concerned', 'frustrated', 'lonely', 'restless', 'vulnerable'],
        needs: ['autonomy', 'choice', 'freedom', 'space', 'support', 'to see and be seen', 'understanding']
    },
    'bullied': {
        feelings: ['angry', 'anxious', 'helpless', 'hurt', 'scared', 'vulnerable'],
        needs: ['acceptance', 'autonomy', 'consideration', 'respect', 'safety']
    },
    'cheated': {
        feelings: ['angry', 'disappointed', 'hurt', 'resentful', 'sad', 'shame', 'vulnerable'],
        needs: ['integrity', 'respect', 'safety', 'support', 'trust']
    },
    'cornered': {
        feelings: ['anxious', 'insecure', 'scared', 'tense', 'uncomfortable', 'vulnerable'],
        needs: ['choice', 'freedom', 'respect', 'safety', 'space']
    },
    'criticized': {
        feelings: ['embarrassed', 'fragile', 'frustrated', 'hurt', 'shame', 'worried', 'vulnerable'],
        needs: ['acceptance', 'appreciation', 'respect', 'understanding']
    },
    'diminished': {
        feelings: ['angry', 'embarrassed', 'frustrated', 'hurt', 'insecure', 'sad', 'vulnerable'],
        needs: ['appreciation', 'recognition', 'respect']
    },
    'discounted': {
        feelings: ['confused', 'frustrated', 'insecure', 'hurt', 'worried', 'vulnerable'],
        needs: ['appreciation', 'consideration', 'respect', 'support', 'to matter']
    },
    'disrespected': {
        feelings: ['angry', 'frustrated', 'hurt', 'lonely', 'numb'],
        needs: ['consideration', 'equality', 'respect', 'safety', 'support', 'trust']
    },
    'distrusted': {
        feelings: ['disconnected', 'furious', 'insecure', 'hurt', 'sad', 'wary'],
        needs: ['connection', 'integrity', 'respect', 'to see and be seen', 'trust']
    },
    'harassed': {
        feelings: ['angry', 'anxious', 'frustrated', 'hurt', 'scared', 'tense', 'vulnerable'],
        needs: ['respect', 'safety', 'space', 'trust']
    },
    'ignored': {
        feelings: ['afraid', 'frustrated', 'hurt', 'lonely', 'sad', 'shame', 'vulnerable'],
        needs: ['belonging', 'connection', 'consideration', 'inclusion', 'to matter']
    },
    'insulted': {
        feelings: ['angry', 'embarrassed', 'hurt', 'insecure', 'sad', 'worried', 'vulnerable'],
        needs: ['consideration', 'recognition', 'respect', 'support', 'to see and be seen']
    },
    'intimidated': {
        feelings: ['anxious', 'lonely', 'panicked', 'scared', 'tense', 'uncomfortable', 'vulnerable'],
        needs: ['equality', 'respect', 'safety', 'space', 'to matter']
    },
    'invalidated': {
        feelings: ['confused', 'frustrated', 'hurt', 'insecure', 'shame', 'vulnerable'],
        needs: ['inclusion', 'to see and be seen', 'respect', 'understanding']
    },
    'invisible': {
        feelings: ['disconnected', 'frustrated', 'lonely', 'sad', 'shame', 'worried', 'vulnerable'],
        needs: ['belonging', 'connection', 'inclusion', 'to matter', 'to see and be seen']
    },
    'isolated': {
        feelings: ['afraid', 'anxious', 'disconnected', 'lonely', 'sad', 'shame', 'vulnerable'],
        needs: ['belonging', 'community', 'companionship', 'connection', 'safety', 'support']
    },
    'left out': {
        feelings: ['hurt', 'insecure', 'lonely', 'panicked', 'sad', 'vulnerable'],
        needs: ['belonging', 'connection', 'consideration', 'inclusion', 'support']
    },
    'let down': {
        feelings: ['disappointed', 'frustrated', 'hurt', 'lonely', 'sad', 'shame', 'vulnerable'],
        needs: ['consideration', 'safety', 'support', 'to see and be seen', 'trust']
    },
    'manipulated': {
        feelings: ['angry', 'confused', 'hurt', 'resentful', 'sad', 'vulnerable'],
        needs: ['autonomy', 'choice', 'clarity', 'respect', 'trust', 'safety']
    },
    'misunderstood': {
        feelings: ['angry', 'disconnected', 'disappointed', 'frustrated', 'lonely', 'sad'],
        needs: ['clarity', 'connection', 'to see and be seen', 'understanding']
    },
    'neglected': {
        feelings: ['afraid', 'confused', 'frustrated', 'hurt', 'insecure', 'lonely', 'sad'],
        needs: ['belonging', 'connection', 'consideration', 'support', 'to matter', 'trust']
    },
    'overworked': {
        feelings: ['exhausted', 'frustrated', 'overwhelmed', 'resentful', 'stressed', 'tired'],
        needs: ['consideration', 'ease', 'rest', 'support']
    },
    'patronized': {
        feelings: ['angry', 'frustrated', 'furious', 'hurt', 'insecure', 'resentful', 'sad'],
        needs: ['choice', 'equality', 'respect', 'safety', 'trust']
    },
    'pressured': {
        feelings: ['afraid', 'anxious', 'depressed', 'overwhelmed', 'stressed', 'tense'],
        needs: ['autonomy', 'choice', 'consideration', 'ease', 'space', 'support', 'trust']
    },
    'provoked': {
        feelings: ['angry', 'frustrated', 'irritated', 'insecure', 'stressed'],
        needs: ['consideration', 'relaxation', 'respect', 'safety', 'space', 'trust', 'understanding']
    },
    'put down': {
        feelings: ['angry', 'confused', 'embarrassed', 'hurt', 'insecure', 'sad', 'worried'],
        needs: ['appreciation', 'clarity', 'respect', 'safety', 'support']
    },
    'rejected': {
        feelings: ['afraid', 'disappointed', 'hurt', 'irritated', 'lonely', 'sad', 'vulnerable'],
        needs: ['acceptance', 'appreciation', 'belonging', 'connection', 'inclusion', 'support', 'trust']
    },
    'taken for granted': {
        feelings: ['angry', 'disappointed', 'frustrated', 'hurt', 'irritated', 'resentful'],
        needs: ['appreciation', 'consideration', 'respect', 'to matter', 'trust', 'understanding']
    },
    'threatened': {
        feelings: ['afraid', 'alarmed', 'angry', 'anxious', 'distraught', 'panicked', 'scared', 'tense'],
        needs: ['ease', 'relaxation', 'safety', 'security', 'trust']
    },
    'trapped': {
        feelings: ['anxious', 'frustrated', 'helpless', 'overwhelmed', 'restless', 'stressed', 'vulnerable'],
        needs: ['autonomy', 'choice', 'freedom', 'space', 'support']
    },
    'tricked': {
        feelings: ['angry', 'furious', 'hurt', 'lonely', 'resentful', 'sad', 'shame', 'shocked', 'vulnerable', 'worried'],
        needs: ['belonging', 'clarity', 'connection', 'respect', 'trust']
    },
    'unappreciated': {
        feelings: ['angry', 'disappointed', 'frustrated', 'hurt', 'lost', 'resentful', 'sad'],
        needs: ['appreciation', 'connection', 'respect', 'to see and be seen', 'to matter']
    },
    'unheard': {
        feelings: ['angry', 'depressed', 'disconnected', 'disappointed', 'frustrated', 'hurt', 'lonely'],
        needs: ['connection', 'consideration', 'understanding']
    },
    'unseen': {
        feelings: ['disconnected', 'frustrated', 'lonely', 'numb', 'sad', 'shame', 'vulnerable'],
        needs: ['connection', 'to see and be seen', 'to matter', 'understanding']
    },
    'unsupported': {
        feelings: ['disappointed', 'frustrated', 'lonely', 'overwhelmed', 'sad', 'shame', 'vulnerable'],
        needs: ['appreciation', 'connection', 'support', 'trust']
    },
    'unwanted': {
        feelings: ['afraid', 'angry', 'hurt', 'lonely', 'panicked', 'sad', 'shame', 'vulnerable'],
        needs: ['acceptance', 'belonging', 'connection', 'inclusion', 'love']
    },
    'used': {
        feelings: ['angry', 'frustrated', 'hurt', 'resentful', 'shame', 'vulnerable'],
        needs: ['appreciation', 'connection', 'consideration', 'mutuality', 'respect', 'trust']
    },
    'victimized': {
        feelings: ['angry', 'frustrated', 'helpless', 'hurt', 'sad', 'scared', 'vulnerable'],
        needs: ['autonomy', 'respect', 'safety', 'to see and be seen', 'trust', 'understanding']
    },
    'violated': {
        feelings: ['afraid', 'angry', 'hurt', 'lonely', 'sad', 'shame', 'vulnerable'],
        needs: ['integrity', 'respect', 'safety', 'support', 'trust']
    }
};
