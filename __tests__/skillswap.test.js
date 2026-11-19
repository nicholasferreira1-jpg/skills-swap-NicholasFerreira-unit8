const {filterSkillsByCategory, calculateTotalCost} = require('../skillswap-functions.js');

const skills = [
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'Guitar Lessons', category: 'Music', price: 15 },
  { title: 'Resume Review', category: 'Career', price: 0 },
  { title: 'Web Development', category: 'Programming', price: 25 }
];

describe('filterSkillsByCategory function', () => {
    test('should return skills that match with the given category', () => {
        expect(filterSkillsByCategory(skills,"Programming")).toEqual([
            { title: 'Python Tutoring', category: 'Programming', price: 20 },{ title: 'Web Development', category: 'Programming', price: 25 } ]);
        expect(filterSkillsByCategory(skills,"Music")).toEqual([
            { title: 'Guitar Lessons', category: 'Music', price: 15 }]);
        expect(filterSkillsByCategory(skills,"Career")).toEqual([
            { title: 'Resume Review', category: 'Career', price: 0 }]);
    });

    test('should return all skills', () => {
        expect(filterSkillsByCategory(skills,"All")).toEqual([
           { title: 'Python Tutoring', category: 'Programming', price: 20 },
           { title: 'Guitar Lessons', category: 'Music', price: 15 },
           { title: 'Resume Review', category: 'Career', price: 0 },
           { title: 'Web Development', category: 'Programming', price: 25 } 
        ]);
    });

    test('should return an empty array if no skills match the given category', () => {
        expect(filterSkillsByCategory(skills,"Art")).toEqual([]);
    });
        
});

describe('calculateTotalCost function', () => {
    test('should return the correct values for different hours and rates', () => {
        expect(calculateTotalCost(20,2)).toBe(40);
    });
    
    test('should return 0 if either hours or rate is zero', () => {
        expect(calculateTotalCost(20,0)).toBe(0);
        expect(calculateTotalCost(0,3)).toBe(0);
    });

    test('should return the correct number for decimal hours', () => {
        expect(calculateTotalCost(25,1.5)).toBe(37.5);
    });

});
