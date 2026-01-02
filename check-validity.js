#!/usr/bin/env node

/**
 * NVC Data Validator
 *
 * This script validates that all feelings and needs referenced in the quasiFeelings
 * constant exist in the main feelings and needs constants.
 *
 * Run with: node check-validity.js
 */

const fs = require('fs');
const path = require('path');

// Read and evaluate the nvc-data.js file
const dataFile = fs.readFileSync(path.join(__dirname, 'nvc-data.js'), 'utf8');

// Use Function constructor to evaluate and return the data
const dataLoader = new Function(dataFile + '; return { feelings, needs, quasiFeelings };');
const { feelings, needs, quasiFeelings } = dataLoader();

// Build sets of all valid feelings and needs
const validFeelings = new Set([
    ...feelings.highPleasant,
    ...feelings.highUnpleasant,
    ...feelings.lowUnpleasant,
    ...feelings.lowPleasant
]);

const validNeeds = new Set([
    ...needs.connection,
    ...needs.physical,
    ...needs.autonomy,
    ...needs.meaning
]);

let hasErrors = false;
let invalidFeelingsCount = 0;
let invalidNeedsCount = 0;
let duplicateFeelings = [];
let duplicateNeeds = [];

console.log('🔍 Validating NVC Data...\n');
console.log(`Total valid feelings: ${validFeelings.size}`);
console.log(`Total valid needs: ${validNeeds.size}`);
console.log(`Total quasi-feelings: ${Object.keys(quasiFeelings).length}\n`);

// Check for duplicate feelings across quadrants
console.log('═'.repeat(70));
console.log('CHECKING FOR DUPLICATE FEELINGS');
console.log('═'.repeat(70));

const feelingsMap = new Map();
Object.keys(feelings).forEach(quadrant => {
    feelings[quadrant].forEach(feeling => {
        if (feelingsMap.has(feeling)) {
            feelingsMap.set(feeling, [...feelingsMap.get(feeling), quadrant]);
        } else {
            feelingsMap.set(feeling, [quadrant]);
        }
    });
});

feelingsMap.forEach((quadrants, feeling) => {
    if (quadrants.length > 1) {
        hasErrors = true;
        duplicateFeelings.push(feeling);
        console.log(`\n❌ "${feeling}" appears in multiple quadrants: ${quadrants.join(', ')}`);
    }
});

if (duplicateFeelings.length === 0) {
    console.log('\n✅ No duplicate feelings found!');
}

// Check for duplicate needs across categories
console.log('\n' + '═'.repeat(70));
console.log('CHECKING FOR DUPLICATE NEEDS');
console.log('═'.repeat(70));

const needsMap = new Map();
Object.keys(needs).forEach(category => {
    needs[category].forEach(need => {
        if (needsMap.has(need)) {
            needsMap.set(need, [...needsMap.get(need), category]);
        } else {
            needsMap.set(need, [category]);
        }
    });
});

needsMap.forEach((categories, need) => {
    if (categories.length > 1) {
        hasErrors = true;
        duplicateNeeds.push(need);
        console.log(`\n❌ "${need}" appears in multiple categories: ${categories.join(', ')}`);
    }
});

if (duplicateNeeds.length === 0) {
    console.log('\n✅ No duplicate needs found!');
}

// Check each quasi-feeling
console.log('\n' + '═'.repeat(70));
console.log('CHECKING FEELINGS IN QUASI-FEELINGS');
console.log('═'.repeat(70));

Object.keys(quasiFeelings).forEach(qf => {
    const invalidFeelings = quasiFeelings[qf].feelings.filter(f => !validFeelings.has(f));
    if (invalidFeelings.length > 0) {
        hasErrors = true;
        invalidFeelingsCount += invalidFeelings.length;
        console.log(`\n❌ ${qf}:`);
        console.log(`   Invalid feelings: ${invalidFeelings.join(', ')}`);
    }
});

if (invalidFeelingsCount === 0) {
    console.log('\n✅ All feelings in quasi-feelings are valid!');
}

console.log('\n' + '═'.repeat(70));
console.log('CHECKING NEEDS IN QUASI-FEELINGS');
console.log('═'.repeat(70));

Object.keys(quasiFeelings).forEach(qf => {
    const invalidNeeds = quasiFeelings[qf].needs.filter(n => !validNeeds.has(n));
    if (invalidNeeds.length > 0) {
        hasErrors = true;
        invalidNeedsCount += invalidNeeds.length;
        console.log(`\n❌ ${qf}:`);
        console.log(`   Invalid needs: ${invalidNeeds.join(', ')}`);
    }
});

if (invalidNeedsCount === 0) {
    console.log('\n✅ All needs in quasi-feelings are valid!');
}

// Summary
console.log('\n' + '═'.repeat(70));
console.log('VALIDATION SUMMARY');
console.log('═'.repeat(70));

if (hasErrors) {
    console.log(`\n❌ VALIDATION FAILED`);
    if (duplicateFeelings.length > 0) {
        console.log(`   Duplicate feelings found: ${duplicateFeelings.length}`);
    }
    if (duplicateNeeds.length > 0) {
        console.log(`   Duplicate needs found: ${duplicateNeeds.length}`);
    }
    if (invalidFeelingsCount > 0) {
        console.log(`   Invalid feelings in quasi-feelings: ${invalidFeelingsCount}`);
    }
    if (invalidNeedsCount > 0) {
        console.log(`   Invalid needs in quasi-feelings: ${invalidNeedsCount}`);
    }
    console.log('\n💡 Fix: Remove duplicates and invalid entries from nvc-data.js');
    process.exit(1);
} else {
    console.log('\n✅ ALL VALIDATIONS PASSED!');
    console.log('   No duplicates found.');
    console.log('   All feelings and needs in quasi-feelings are valid.');
    process.exit(0);
}
