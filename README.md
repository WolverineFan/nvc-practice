# NVC Practice & Learning Tool

A single-page web application for practicing Nonviolent Communication (NVC), featuring a feeling circumplex, needs explorer, thought transformer, and sentence builder.

## Project Structure

```
nvc-test-app/
├── index.html          # Main HTML structure
├── styles.css          # All styling
├── script.js           # Application logic and UI interactions
├── nvc-data.js         # NVC data constants (feelings, needs, quasi-feelings)
├── check-validity.js   # Data validation script
├── package.json        # NPM configuration
└── README.md          # This file
```

## Data Files

### nvc-data.js

Contains three main data structures:

- **feelings**: 241 feelings organized into 4 quadrants based on the Circumplex Model
  - `highPleasant`: Energized & pleasant (e.g., excited, joyful)
  - `highUnpleasant`: Energized & unpleasant (e.g., angry, anxious)
  - `lowUnpleasant`: Tired & unpleasant (e.g., sad, lonely)
  - `lowPleasant`: Calm & pleasant (e.g., peaceful, content)

- **needs**: 82 universal human needs in 4 categories
  - `connection`: Interpersonal needs (e.g., respect, belonging)
  - `physical`: Body needs (e.g., rest, food, water)
  - `autonomy`: Self-determination needs (e.g., freedom, choice)
  - `meaning`: Purpose needs (e.g., growth, understanding)

- **quasiFeelings**: 45 common non-feeling words mapped to authentic feelings and needs
  - Each quasi-feeling includes suggested real feelings and underlying needs
  - Example: "abandoned" → feelings: [lonely, scared, sad...] + needs: [connection, belonging...]

## Data Validation

The project includes a permanent validation script to ensure data integrity.

### Running Validation

```bash
npm run validate
```

Or directly:

```bash
node check-validity.js
```

### What Gets Validated

The script checks that:
1. All feelings referenced in `quasiFeelings` exist in the main `feelings` constant
2. All needs referenced in `quasiFeelings` exist in the main `needs` constant

### Validation Output

**Success:**
```
✅ ALL VALIDATIONS PASSED!
   All feelings and needs in quasi-feelings are valid.
```

**Failure:**
```
❌ VALIDATION FAILED
   Invalid feelings found: 5
   Invalid needs found: 3
```

The script will list specific invalid entries and exit with code 1 on failure.

## Features

1. **Feeling Explorer**: Explore 241 feelings organized by Russell & Feldman Barrett's circumplex model
2. **Needs Explorer**: Browse 82 universal human needs across 4 categories
3. **Thought Transformer**: Convert quasi-feelings into authentic feelings and needs
4. **Sentence Builder**: Construct NVC statements with observation, feeling, need, and request

## Development

### Prerequisites

- Node.js (for running validation script)
- Modern web browser with ES6 module support

### Running the App

Simply open `index.html` in a web browser. No build step required.

### Adding New Data

1. Edit `nvc-data.js` to add new feelings, needs, or quasi-feelings
2. Run `npm run validate` to ensure all references are valid
3. Fix any validation errors before committing

### Best Practices

- Only add feelings/needs that align with NVC principles
- Keep quasi-feelings mapped to actual feelings in the main list
- Run validation after any data changes
- Organize feelings by circumplex quadrant appropriately

## NVC Framework

This tool is based on Marshall Rosenberg's Nonviolent Communication framework and uses the Circumplex Model of Affect developed by James Russell and Lisa Feldman Barrett for organizing emotions.

## License

MIT
