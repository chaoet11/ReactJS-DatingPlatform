const trip = {
    getPlans: '/trip-plans',
    createPlansAndCalendar: '/trip-plans/add',
    deletePlans: '/trip-plans/delete/:trip_plan_id',
    editPlans: '/trip-plans/edit/:trip_plan_id',
    getOtherPlans: '/other-plans',
    getMyDetail: '/my-details/:trip_plan_id', //讀取trip_calendar的資料
    getMyTripName: '/my-details/trip-plan/:trip_plan_id', ////讀取單筆trip_plans的資料
    getContentMorning: '/my-details/morning-content/:trip_plan_id',
    getContentNoon: '/my-details/noon-content/:trip_plan_id',
    getContentNight: '/my-details/night-content/:trip_plan_id',
    getAllDayContent: '/my-details/allday-content/:trip_plan_id', //拿到所有與trip_plan_id相符的trip_details
    getMyBarPhoto: '/my-details/bar-photo/:trip_plan_id',
    getMyMoviePhoto: '/my-details/movie-photo/:trip_plan_id',
    getMyBarNameForPhoto: '/my-details/bar-name/:trip_plan_id',
    editShare: '/my-details/share/:trip_plan_id',
    editUnshare: '/my-details/unshare/:trip_plan_id',
    createContentMorning: '/my-details/add-morning/:trip_plan_id',
    createContentNoon: '/my-details/add-noon/:trip_plan_id',
    createContentNight: '/my-details/add-night/:trip_plan_id',
    getBarSaved: '/my-details/recommend/bar',
    getMovie: '/my-details/recommend/movie',
    getMovieWithId: '/my-details/recommend/movie/:trip_detail_id',
    editAddBar: '/my-details/addbar',
    editAddMovie: '/my-details/addmovie',
    deleteDetail: '/my-details/delete/:trip_detail_id',
    uploadTripPhoto: '/my-details/photo/:trip_plan_id',
    editDnN: '/my-details/DnN/:trip_plan_id',
    createContentBar: '/my-details/add-bar/:trip_plan_id',
    createContentMovie: '/my-details/add-movie/:trip_plan_id',
    //將他人行程加入月曆
    createOtherContent: '/other-plans/add',
};

const community = {
    getEvents: '/events',
    getEventPage: '/get-event-page/:eventId',
    getPosts: '/posts',
    getPostPage: '/get-post-page/:postId',
    getUserPosts: '/posts/:userId',
    uploadPhoto: '/upload-photo',
    getSuggestUsers: '/getSuggestUsers',
    createPost: '/create-post',
    uploadEventPhoto: '/upload-event-photo',
    createEvent: '/create-event',
    savePost: '/save-post',
    unsavePost: '/unsave-post',
    likePost: '/like-post',
    unlikePost: '/unlike-post',
    attendEvent: '/attend-event',
    notAttendEvent: '/notattend-event',
    isAttendedEvent: '/isAttended-event',
    getComments: '/get-comments',
    addComment: '/add-comment',
    getFollows: '/get-follows/:userId',
    getCountPosts: '/get-count-posts/:userId',
    getUserInfo: '/get-userInfo/:userId',
    checkPostStatus: '/check-post-status',
    getRandomPosts: '/get-random-posts',
    checkEventStatus: '/check-event-status',
    deletePost: '/delete-post',
    deleteEvent: '/delete-event',
    deleteComment: '/delete-comment',
    follow: '/follow',
    unfollow: '/unfollow',
    checkFollowStatus: '/check-follow-status',
    getPostsByKeyword: '/get-posts-by-keyword',
    searchUsers: '/search-users',
    editPost: '/edit-post',
    editPostPhoto: '/edit-post-photo',
    editEvent: '/edit-event',
    editEventPhoto: '/edit-event-photo',
    getFollowers: '/get-followers/:followingId',
    getFollowings: '/get-followings/:followerId',
    getNoti: '/get-noti/:userId',
    markNotiAsRead: '/mark-noti-as-read/:notiId',
};

const bar = {
    getBarList: '/bar-list',
    getBarListType: '/bar-list/:bar_type_id',
    getBarListArea: '/bar-list/area/:bar_area_id',
    getBarListId: '/bar-list/id/:bar_id',
    getBarListRandom: '/bar-list-random',

    getBarType: '/bar-type/:bar_type_id',
    getBarArea: '/bar-area/:bar_area_id',
    getBarDetail: '/bar-detail/:bar_id',
    getBarRating: '/bar-rating/:bar_id',
    test: '/bar-rating-average',
    getBarRatingAverage: '/bar-rating-average/:bar_id',
    getBarBookingList: '/bar-booking-list',
    getBarBookingListById: '/bar-booking-list/:user_id',
    getBarBookingById: '/bar-booking/:bar_id',

    getBarListSport: '/bar-list-sport',
    getBarListMusic: '/bar-list-music',
    getBarListForeign: '/bar-list-foreign',
    getBarListSpecialty: '/bar-list-specialty',
    getBarListOthers: '/bar-list-others',

    createBarBooking: '/create-bar-booking',
    createBarRating: '/create-rating',
    savedBar: '/saved-bar',
    unsavedBar: '/unsaved-bar',
    checkBarStatus: '/check-bar-status',
    searchBars: '/search-bars',
    deleteBarBooking: '/delete-bar',
};

const booking = {
    getMovieList: '/movie-list',
    getMovieListType: '/movie-list/:movie_type_id',
    getIndexMovieList: '/index-movie-list',
    saveMovie: '/save-movie',
    unsaveMovie: '/unsave-movie',
    checkMovieStatus: '/check-movie-status',
    searchMovies: '/search-movies',
    getBookingSystem: '/get-booking-system',
    deleteMovieBooking: '/delete-movie-booking',
    getMovieDetail: '/get-movie-detail/:movieId',
};

export { community, trip, bar, booking };
