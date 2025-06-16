$(function() {
"use strict";
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'month,listWeek'
        },
        defaultDate: '2025-05-14',
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function() {
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }
        },
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'Triển khai - chỉnh sửa đơn hàng',
                start: '2025-05-12',
                className: 'bg-info',
                
            },
            {
                title: 'Triển khai - chỉnh sửa phân hệ sản xuất',
                start: '2025-05-12',
                end: '2025-05-13',
                className: 'bg-danger'
            },
            {
                id: 998,
                title: 'Triển khai - chỉnh sửa 1',
                start: '2025-05-12T16:00:00',
                className: 'bg-dark'
            },
            {
                id: 999,
                title: 'Triển khai - chỉnh sửa 2',
                start: '2025-05-15T16:00:00',
                className: 'bg-success'
            },
            {
                title: 'Triển khai - chỉnh sửa 2',
                start: '2025-05-16',
                end: '2025-05-16',
                className: 'bg-primary'
            },
            {
                title: 'Họp',
                start: '2025-05-14T10:30:00',
                end: '2025-05-16 T12:30:00',
                className: 'bg-warning'
            },
            {
                title: 'Triển khai - chỉnh sửa 3',
                start: '2025-05-14T12:00:00',
                className: 'bg-dark'
            },
            {
                title: 'Triển khai - chỉnh sửa 3',
                start: '2025-05-14T14:30:00',
                className: 'bg-secondary'
            },
            {
                title: 'Triển khai - chỉnh sửa 4',
                start: '2025-05-14T17:30:00',
                className: 'bg-dark'
            },
            {
                title: 'Triển khai - chỉnh sửa 5',
                start: '2025-05-14T20:00:00',
                className: 'bg-warning'
            },
            {
                title: 'Triển khai - chỉnh sửa 6',
                start: '2025-05-14T07:00:00',
                className: 'bg-success'
            },
            {
                title: 'liên kết',
                url: 'http://google.com/',
                start: '2025-05-16',
                className: 'bg-primary'
            }
        ]
    });

});

    