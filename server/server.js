slidekastDB = new Meteor.Collection('slidekast');
//Meteor.users.remove({});

if (slidekastDB.find({}).count() == 0){
    slidekastDB.insert({current_slide: 0})
}
