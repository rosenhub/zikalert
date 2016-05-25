angular.module('starter.controllers', [])

.controller('MusicCtrl', ['$scope', 'MediaManager', function($scope, MediaManager) {
    var urlprefix = '/android_asset/www/audio/';

    $scope.dynamicTrack = {};

    $scope.tracks = [
        {
            url: '/audio/00.mp3',
            title: '8kHz: Average tone. Best for any age.'
        },
        {
            url: '/audio/25.mp3',
            title: '16kHz Tone: Best for those around 25'
        },{
            url: '/audio/45.mp3',
            title: '14kHz Tone: Best for those around 40'
        },
        {
            url: '/audio/60.mp3',
            title: '10kHz Tone: Best for those around 60'
        }

        // {
        //     url: '/audio/april2016/15-474.mp3',
        //     artist: 'McDonnell v. United States',
        //     title: '04/27/2016'
        // },
        // {
        //     url: '/audio/april2016/15-458.mp3',
        //     artist: 'Dietz v. Bouldin',
        //     title: '04/26/2016'
        // },
        //  {
        //     url: '/audio/april2016/15-6092.mp3',
        //     artist: 'Mathis v. United States',
        //     title: '04/26/2016'
        // },
        //  {
        //     url: '/audio/april2016/446.mp3',
        //     artist: 'Cuozzo Speed Technologies, LLC v. Lee',
        //     title: '04/25/2016'
        // },
        //  {
        //     url: '/audio/april2016/15-375.mp3',
        //     artist: 'Supap Kirtsaeng v. John Wiley & Sons, Inc.',
        //     title: '04/25/2016'
        // },
        //  {
        //     url: '/audio/april2016/15-415.mp3',
        //     artist: 'Encino Motorcars, LLC v. Navarro',
        //     title: '04/20/2016'
        // },
        // {
        //     url: '/audio/april2016/14-1468.mp3',
        //     artist: 'Birchfield v. North Dakota',
        //  },   
        // {
        //     url: '/audio/april2016/15-7.mp3',
        //     artist: 'Universal Health Services, Inc. v. United States',
        //     title: '04/19/2016'
        // },
        // {
        //     url: '/audio/april2016/15-420.mp3',
        //     artist: 'United States v. Bryant',
        //     title: '04/19/2016'
        // },
        // {
        //     url: '/audio/april2016/15-674.mp3',
        //     artist: 'United States v. Texas',
        //     title: '04/18/2016'
        // }
    ];

    $scope.stopPlayback = function() {
        MediaManager.stop();
    };
    $scope.playTrack = function(index) {
        $scope.dynamicTrack = $scope.tracks[index];

        $scope.togglePlayback = !$scope.togglePlayback;    
    };
}])
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('TimelineCtrl', function($scope) {
  $scope.items = [
    { id: 1, title: 'Supreme Court Founded', text: 'The Supreme Court of the United States was founded by an act of Congress.', icon: 'icon ion-home', time: 'February 2nd, 1790'},
    { id: 2, title: 'John Jay, NY', text: 'Appointed by President Washington', icon: 'icon ion-person',time: 'October 19, 1789 to June 29, 1798'},
    { id: 3, title: 'Marbury v. Madison', text: 'Established the Supreme Court\'s power of judicial review over Congress.', icon: 'icon ion-ios-star', time: '1803 (4-0 decision)'},
    { id: 4, title: 'John Marshall, VA', text: 'Appointed by President John Adams', icon: 'icon ion-person', time: 'February 4, 1801 to July 6, 1835'},
    { id: 5, title: 'McCulloch v. Maryland', text: 'Established the federal government\'s implied power over the states.', icon: 'icon ion-ios-star', time: '1819 (7-0 decision)'},
    { id: 6, title: 'Roger Brooke Taney, MD', text: 'Appointed by President Jackson', icon: 'icon ion-person', time: 'March 28, 1836 to October 12, 1864'},
    { id: 7, title: 'Dred Scott v. Sandford', text: 'Denied the rights of US citizenship to African American slaves.', icon: 'icon ion-ios-star', time: '1857 (7-2 decision)'},
    { id: 8, title: 'Salmon Portland Chase, OH', text: 'Appointed by President Lincoln', icon: 'icon ion-person', time: 'December 15, 1864 to May 7, 1873'},
    { id: 9, title: 'Morrison Remick Waite, OH', text: 'Appointed by President Grant', icon: 'icon ion-person', time: 'March 4, 1874 to March 23 1888'},
    { id: 10, title: 'Melville Weston Fuller, IL', text: 'Appointed by President Cleveland', icon: 'icon ion-person', time: 'October 8, 1888 to July 4, 1910'},
    { id: 11, title: 'Plessy v. Ferguson', text: 'Upheld "seperate but equal" segregation laws.', icon: 'icon ion-ios-star', time: '1896 (7-1 decision)'},
    { id: 12, title: 'Edward Douglas White, LA', text: 'Appointed by President Taft', icon: 'icon ion-person', time: 'May 19, 1910 to May 19, 1921'},
    { id: 13, title: 'William Howard Taft, CT', text: 'Appointed by President Harding', icon: 'icon ion-person', time: 'July 11, 1921 to February 3, 1930'},
    { id: 14, title: 'Charles Evans Hughes, NY', text: 'Appointed by President Hoover', icon: 'icon ion-person', time: 'February 24, 1930 to June 30, 1941'},
    { id: 15, title: 'Korematsu v. United States', text: 'Upheld internment of Japanese Americans during World War II.', icon: 'icon ion-ios-star', time: '1944 (6-3 decision)'},
    { id: 16, title: 'Harlan Fiske Stone, NY', text: 'Appointed by President Roosevelt, F.', icon: 'icon ion-person', time: 'July 3, 1941 to April 22, 1946'},
    { id: 17, title: 'Fred Moore Vinson, KY', text: 'Appointed by President Truman', icon: 'icon ion-person', time: 'June 24, 1946 to September 8, 1953'},
    { id: 18, title: 'Earl Warren, CA', text: 'Appointed by President Eisenhower', icon: 'icon ion-person', time: 'October 5, 1953 to June 23, 1969'},
    { id: 19, title: 'Brown v. Board of Education', text: 'Separating black and white students in public schools is unconstitutional.', icon: 'icon ion-ios-star', time: '1954 (9-0 decision)'},
    { id: 20, title: 'Miranda v. Arizona', text: 'Prisoners must be advised of their rights before being questioned by police.', icon: 'icon ion-ios-star', time: '1966 (5-4 decision)'},
    { id: 21, title: 'Warren Earl Burger, VA', text: 'Appointed by President Nixon', icon: 'icon ion-person', time: 'June 23, 1969 to September 26, 1986'},
    { id: 22, title: 'Roe v. Wade', text: 'Women have a constitutional right to an abortion during the first two trimesters.', icon: 'icon ion-ios-star', time: '1973 (7-2 decision)'},
    { id: 23, title: 'William H. Rehnquist, VA', text: 'Appointed by President Reagan', icon: 'icon ion-person', time: 'September 26, 1986 to September 3, 2005'},
    { id: 24, title: 'Bush v. Gore', text: 'No recount of the 2000 presidential election was feasible in a reasonable time period.', icon: 'icon ion-ios-star', time: '2000 (5-4 decision)'},
    { id: 25, title: 'John G. Roberts, Jr., MD', text: 'Appointed by President Bush', icon: 'icon ion-person', time: 'September 29, 2005 to Present'},
    { id: 24, title: 'Citizens United v. The FEC', text: 'Corporations and unions can spend unlimited amounts in elections.', icon: 'icon ion-ios-star', time: '2010 (5-4 decision)'}
  ];
})
.controller('ScotusCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('MoreCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});



