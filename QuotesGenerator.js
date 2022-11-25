// variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        person: 'Nelson Mandela'
    },
    {
        quote: '"The way to get started is to quit talking and begin doing."',
        person: 'Walt Disney'
    },
    {
        quote: '"Your time is limited, so do not waste it living someone elses life. Do not be trapped by dogma - which is living with the results of other peoples thinking."',
        person: 'Steve Jobs'
    },
    {
        quote: '"If life were predictable it would cease to be life, and be without flavor."',
        person: 'Eleanor Roosevelt'
    },
    {
        quote: '"If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough"',
        person: 'Oprah Winfrey'
    },
    {
        quote: '"If you set your goals ridiculously high and it is a failure, you will fail above everyone elses success."',
        person: 'James Cameron'
    },
    {
        quote: '"Life is what happens when you are busy making other plans."',
        person: 'John Lennon'
    },
    {
        quote: '"Do not go where the path may lead, go instead where there is no path and leave a trail."',
        person: 'Ralph Waldo Emerson'
    },
    {
        quote: '"Do not judge each day by the harvest you reap but by the seeds that you plant."',
        person: 'Robert Louis Stevenson'
    },
    {
        quote: '"It is during our darkest moments that we must focus to see the light."',
        person: 'Aristotle'
    },
];

btn.addEventListener('click', function(){
    
    let random = Math.floor(Math.random()*quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})