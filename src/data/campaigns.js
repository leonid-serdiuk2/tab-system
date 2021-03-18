export default {
    headers: [
        {
            text: 'DrillDown',
            align: 'start',
            sortable: false,
            value: 'drilldown',
        },
        {
            text: 'Campaign Name',
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
            name: 'IPhone 12',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
            path: 'frozenYogurt'
        },
        {
            name: 'American Election',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
            path: 'iceCream'
        },
        {
            name: 'default',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
            path: 'eclair'
        },
    ]
}