const companies = [
    {name: "Company 1", category: "Finance", start: 1981, end: 2003},
    {name: "Company 2", category: "Retail", start: 1992, end: 2008},
    {name: "Company 3", category: "Auto", start: 1999, end: 2007},
    {name: "Company 4", category: "Retail", start: 1989, end: 2010},
    {name: "Company 5", category: "Technology", start: 2009, end: 2014},
    {name: "Company 6", category: "Finance", start: 1987, end: 2010},
    {name: "Company 7", category: "Auto", start: 1986, end: 1996},
    {name: "Company 8", category: "Technology", start: 2011, end: 2016},
    {name: "Company 9", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach
companies.forEach(company => console.log(company));


//filter
const ageBar = ages.filter(age => age >= 18); //Age >= 18
console.log(ageBar);

const financeCompany  = companies.filter(company => company.category === 'Finance');
console.log(financeCompany); //category = Finance

const ninetiesCompanies = companies.filter(company => (company.start >=1990 && company.start <2000)); //90's companies
console.log(ninetiesCompanies); 

const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
console.log(lastedTenYears);


//map
const companyNames = companies.map(company => company.name); //all company names
console.log(companyNames);

const distinctCategory = new Set(companies.map(company => company.category)); 
console.log(distinctCategory); //distinct category

const testMap = companies.map(company => `${company.name}: ${company.start} - ${company.end}`);
console.log(testMap);  //templateString


//sort
const sortedCompanies = companies.sort((a, b) => a.start - b.start);
console.log(sortedCompanies);

const sortedAges = ages.sort((a, b) => (a > b ? 1 : -1));
console.log(sortedAges);


//reduce
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);


//combine methods
const combined = ages
    .filter(age => age >=21)
    .map(age => age * 3)
    .sort((a, b) => a - b)
    .reduce((total, value) => total + value, 0);
console.log(combined);
