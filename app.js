app.controller("ListPageController",function($scope){
    var TestData = {}
    TestData.data = [{"id":"1","title":"test1"}, {"id":"2","title":"test2"},{"id":"3","title":"test3"}]
    $scope.testdata = TestData.data 
});