
function filterSkillsByCategory(skills, category) {
    if (category === "All") {
        return skills;
    }

    return skills.filter(skill => skill.category === category)
};


function calculateTotalCost(rate, hours) {
    return rate * hours;
}

if (typeof module !== 'undefined') {
    module.exports = { filterSkillsByCategory, calculateTotalCost };
}

