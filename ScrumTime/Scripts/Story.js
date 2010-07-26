﻿
function setupReadOnlyStoryRow(storyId) {
    $(".story_" + storyId).click(function () {
        $(this).parent().load('/Story/EditRow', { id: storyId });
    });
    $("#task_" + storyId).click(function () {
        $(this).parent().parent().load('/Task/ListByStory', {storyId: storyId});
    });
    return;
}

function cancelRowEdit(parentTagId, id) {
    $(parentTagId).load('/Story/ReadOnlyRow', { id: id});
    return;
}


// loadJSON is not currently used...but do not delete just yet
function loadJSON() {
    $(document).ready(function () {
        $("#task_1").click(function () {
            //            $.getJSON('Home/StoryJson',{'test' : "test1"}, function (data) {
            //                alert(data.d);
            //             });
            //$('#storyId_1').load('Home/Story');
            $(this).parent().parent().load('/Story/StoryTasks');
            //            var obj = $(this).parent().parent();
            //            alert(obj.get(0).tagName);
        });
    });
    return;
}