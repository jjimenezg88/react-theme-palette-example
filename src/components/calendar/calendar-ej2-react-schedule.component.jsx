import React from "react";
import { Internationalization, extend } from "@syncfusion/ej2-base";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  Month,
  Agenda,
  ResourcesDirective,
  ResourceDirective,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { applyCategoryColor } from "./helper";
import * as dataSource from "./datasource.json";
import "./calendar-ej2.style.scss"

const CalendarEj2ReactSchedule = () => {
  const data = extend([], dataSource.fifaEventsData, null, true);
  const instance = new Internationalization();
  const resourceData = [
    { GroupText: "Group A", GroupId: 1, GroupColor: "#1aaa55" },
    { GroupText: "Group B", GroupId: 2, GroupColor: "#357cd2" },
  ];

  let scheduleObj = {
    currentView: "Agenda",
  };

  const getTimeString = (value) => {
    return instance.formatDate(value, { skeleton: "Hm" });
  };

  const agendaTemplate = (props) => {
    return (
      <div>
        <div className="subject ">{props.Subject}</div>
        {props.Description !== null &&
        props.Description !== undefined &&
        props.Description !== "" ? (
          <div className="group">{props.Description}</div>
        ) : (
          ""
        )}
        <div className="location">
          {getTimeString(props.StartTime)}
          {props.City !== null && props.City !== undefined && props.City !== ""
            ? ", " + props.City
            : ""}
        </div>
      </div>
    );
  };

  const monthEventTemplate = (props) => {
    return <div className="subject">{props.Subject}</div>;
  };

  const onEventRendered = (args) => {
    applyCategoryColor(args, scheduleObj.currentView);
  };

  return (
    <div className='schedule-control-section'>
    <div className='col-lg-12 control-section'>
      <div className='control-wrapper'>
        <ScheduleComponent cssClass='schedule-views-config' width='100%' height='650px' ref={t => scheduleObj = t} currentView='Month' selectedDate={new Date(2021, 5, 20)} eventSettings={{ dataSource: data, fields: { location: { name: 'City' } } }} eventRendered={onEventRendered.bind(this)}>
          <ResourcesDirective>
            <ResourceDirective field='GroupId' title='Owner' name='Owners' dataSource={resourceData} textField='GroupText' idField='GroupId' colorField='GroupColor'>
            </ResourceDirective>
          </ResourcesDirective>
          <ViewsDirective>
            <ViewDirective option='Day' startHour='07:00' endHour='18:00'/>
            <ViewDirective option='Week' startHour='09:00' endHour='19:00' showWeekend={false} timeScale={{ interval: 60, slotCount: 4 }}/>
            <ViewDirective option='Month' group={{ resources: ['Owners'] }} eventTemplate={monthEventTemplate.bind(this)}/>
            <ViewDirective option='Agenda' eventTemplate={agendaTemplate.bind(this)}/>
          </ViewsDirective>
          <Inject services={[Day, Week, Month, Agenda, Resize, DragAndDrop]}/>
        </ScheduleComponent>
      </div>
    </div>
  </div>
  );
};

export default CalendarEj2ReactSchedule;
