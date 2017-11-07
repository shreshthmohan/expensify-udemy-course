import * as firebase from 'firebase';

const config = {
        apiKey: "AIzaSyA1jdEBkUJsmcDiDstSFHeSz4dlqi7oIio",
        authDomain: "expensify-9b187.firebaseapp.com",
        databaseURL: "https://expensify-9b187.firebaseio.com",
        projectId: "expensify-9b187",
        storageBucket: "expensify-9b187.appspot.com",
        messagingSenderId: "500907307970"
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default };

//database.ref('expenses').on('child_changed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});



//database.ref('expenses').on('value', (snapshot) => {
//    const expenses = [];
//    snapshot.forEach((childSnapshot) => {
//        expenses.push({
//            id: childSnapshot.key,
//            ...childSnapshot.val()
//        });
//    });
//    console.log(expenses);
//});


//const expenses = [
//    {
//        description: 'food bill',
//        amount: 134.45,
//        note: 'tets',
//        createdAt: 1345
//    },
//    {
//        description: 'waterbill',
//        amount: 13.45,
//        note: 'tets',
//        createdAt: 145345
//    },
//    {
//        description: 'electricity bill',
//        amount: 139.45,
//        note: 'tetfegss',
//        createdAt: 145346345
//    },
//];
//
//database.ref('expenses').push(expenses[0]);
//database.ref('expenses').push(expenses[1]);
//database.ref('expenses').push(expenses[2]);

//const subscribe = database.ref().on('value', (snapshot) => {
//    const val = snapshot.val();
//    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
//}, (err) => {
//    console.log('Whoops! Error: ', err);
//});
//
//setTimeout(() => {database.ref().off('value', subscribe);}, 10000);
//database.ref()
//    .once('value')
//    .then((snapshot) => {
//        const val = snapshot.val();
//        console.log(val);
//    })
//    .catch((err) => {
//        console.log('Eror getting data: ' + err);
//    });

//database.ref().set({
//    name: 'Shreshth',
//    age: 26,
//    stressLevel: 6,
//    job: {
//        title: 'Software Developer',
//        company: 'Google'
//    },
//    location: {
//        city: 'Delhi',
//        country: 'India'
//    }
//});
//
////database.ref().set('this is my data');
//
////database.ref('age').set(25);
//
//database.ref('attributes').set(
//    {
//        height: 23,
//        weight: 59
//    }
//).then(() => {
//    console.log('height and weight were saved');
//})
//.catch((err) => {
//    console.log(':', err);
//});
//
//
//database.ref('isMarried').remove();
//database.ref().update({
//    'job/company' : 'Amazon',
//    'location/city': 'Mumbai',
//    stressLevel: 9
//});
