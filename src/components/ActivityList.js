import React from "react";
import { List, Message, Segment } from "semantic-ui-react";
import { groupBy, map, filter } from "lodash";
import moment from "moment";

const ActivityList = ({ activeUser, selectedDate }) => {
  const activityPeriods = "activity_periods";
  const dateFormat = "MMM DD YYYY hh:mm:ssa";
  const groupByDays = groupBy(activeUser[activityPeriods], function (date) {
    return moment(date["start_time"], dateFormat).startOf("day").format("LL");
  });
  const groupByTimeIntervals = map(groupByDays, function (group, day) {
    const formatTime = map(group, function (groupTime) {
      let { start_time: startTime, end_time: endTime } = groupTime;
      startTime = moment(startTime, dateFormat).format("LT");
      endTime = moment(endTime, dateFormat).format("LT");
      return {
        start_time: startTime,
        end_time: endTime,
      };
    });
    return {
      day: day,
      times: formatTime,
    };
  });

  const dateSelected = moment(selectedDate).format("LL");
  const filterDay = filter(groupByTimeIntervals, function (date) {
    return date["day"] === dateSelected;
  });

  const renderAvailableDates = () => {
    return map(groupByTimeIntervals, function (date, index) {
      return (
        <List.Item key={index}>
          <List.Content>
            <List.Header as="a">{date.day}</List.Header>
          </List.Content>
        </List.Item>
      );
    });
  };
  const renderItems = () => {
    if (filterDay.length > 0) {
      return map(filterDay[0]["times"], function (time, index) {
        return (
          <List.Item key={index}>
            <List.Content>
              <List.Header as="a">
                Start Time : {time.start_time}
                <List.Description>End Time : {time.end_time}</List.Description>
              </List.Header>
            </List.Content>
          </List.Item>
        );
      });
    } else {
      return (
        <Segment>
          <h4>No Results found for this day! Please select a different day.</h4>
          <Message
            header="Available dates for user activity"
            content="Please select
            the date from the list below in the calendar to see user activity
            for that day"
          />
          <List relaxed>{renderAvailableDates()}</List>
        </Segment>
      );
    }
  };
  return <List relaxed>{renderItems()}</List>;
};
export default ActivityList;
