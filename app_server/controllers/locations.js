const homelist = (req, res) => {
   res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
}
   });
};

const locationInfo = (req, res) => {
    res.render('index', {title : 'Location Info'})
};

const addReview = (req, res) => {
    res.render('index', {title : 'Add Review'})
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};