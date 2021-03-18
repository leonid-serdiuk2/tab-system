export default {
    headers: [
        {
            text: 'DrillDown',
            align: 'start',
            sortable: false,
            value: 'drilldown',
        },
        {
            text: 'Affiliate Name',
            align: 'start',
            sortable: false,
            value: 'name',
        },
        { text: 'Clicks', value: 'calories' },
        { text: 'Visits', value: 'carbs' },
        { text: 'Sales', value: 'protein' },
        { text: 'EPC', value: 'fat' },
        { text: 'SalesRatio (%)', value: 'iron' },
    ],
    body: [
        {
            name: 'Jane Shepard',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
            path: 'iceCream'
        },
        {
            name: 'Tony Stark',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
            path: 'eclair'
        },
        {
            name: 'Poul The Alien',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
            path: 'capcake'
        },
        {
            name: 'Jhon Snow',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
            path: 'lollipop'
        },
        {
            name: 'Capitan Vuejs',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
            path: 'honeycomb'
        },
    ]
}