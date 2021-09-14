import React from "react";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  MonthView,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  TodayButton,
  Resources,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import { withStyles, createStyles } from "@material-ui/core";
import { indigo, blue, teal } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import { alpha } from "@material-ui/core/styles";
import classNames from "clsx";
import { appointments, resources } from "./test.data";

const styles = ({ palette }) =>
  createStyles({
    appointment: {
      borderRadius: 0,
      borderBottom: 0,
    },
    highPriorityAppointment: {
      borderLeft: `4px solid ${teal[500]}`,
    },
    mediumPriorityAppointment: {
      borderLeft: `4px solid ${blue[500]}`,
    },
    lowPriorityAppointment: {
      borderLeft: `4px solid ${indigo[500]}`,
    },
    weekEndCell: {
      backgroundColor: alpha(palette.action.disabledBackground, 0.04),
      "&:hover": {
        backgroundColor: alpha(palette.action.disabledBackground, 0.04),
      },
      "&:focus": {
        backgroundColor: alpha(palette.action.disabledBackground, 0.04),
      },
    },
    weekEndDayScaleCell: {
      backgroundColor: alpha(palette.action.disabledBackground, 0.06),
    },
    text: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    content: {
      opacity: 0.7,
    },
    container: {
      width: "100%",
      lineHeight: 1.2,
      height: "100%",
    },
  });

const isWeekEnd = (date) => date.getDay() === 0 || date.getDay() === 6;
const defaultCurrentDate = new Date(2021, 9, 2, 11, 15);

const DayScaleCell = withStyles(styles)(({
    startDate, classes, ...restProps
  }) => (
    <MonthView.DayScaleCell
      className={classNames({
        [classes.weekEndDayScaleCell]: isWeekEnd(startDate),
      })}
      startDate={startDate}
      {...restProps}
    />
  ));

  const TimeTableCell = withStyles(styles)((
    { startDate, classes, ...restProps },
  ) => (
    <MonthView.TimeTableCell
      className={classNames({
        [classes.weekEndCell]: isWeekEnd(startDate),
      })}
      startDate={startDate}
      {...restProps}
    />
  ));

  const Appointment = withStyles(styles)(({
    classes, data, ...restProps
  }) => (
    <Appointments.Appointment
      {...restProps}
      className={classNames({
        [classes.highPriorityAppointment]: data.priority === 1,
        [classes.mediumPriorityAppointment]: data.priority === 2,
        [classes.lowPriorityAppointment]: data.priority === 3,
        [classes.appointment]: true,
      })}
      data={data}
    />
  ));

  // #FOLD_BLOCK
const AppointmentContent = withStyles(styles, { name: 'AppointmentContent' })(({
    classes, data, ...restProps
    // #FOLD_BLOCK
  }) =>  {
    let priority = 'low';
    if (data.priority === 2) priority = 'medium';
    if (data.priority === 3) priority = 'high';
    return (
      <Appointments.AppointmentContent {...restProps} data={data}>
        <div className={classes.container}>
          <div className={classes.text}>
            {data.title}
          </div>
          <div className={classNames(classes.text, classes.content)}>
            {`Priority: ${priority}`}
          </div>
          <div className={classNames(classes.text, classes.content)}>
            {`Location: ${data.location}`}
          </div>
        </div>
      </Appointments.AppointmentContent>
    );
  });

  const CalendarDevExtreme = () => (
    <Paper>
      <Scheduler
        data={appointments}
      >
        <ViewState
          defaultCurrentDate={defaultCurrentDate}
        />
  
        <MonthView
          dayScaleCellComponent={DayScaleCell}
          timeTableCellComponent={TimeTableCell}
        />
        <DayView
          displayName={'Week'}
          startDayHour={10}
          endDayHour={17}
          intervalCount={7}
        />
  
        <Appointments
          appointmentComponent={Appointment}
          appointmentContentComponent={AppointmentContent}
        />
        <Resources
          data={resources}
        />
  
        <AppointmentTooltip
          showCloseButton
        />
        <Toolbar />
        <DateNavigator />
        <ViewSwitcher />
        <TodayButton />
      </Scheduler>
    </Paper>
  );

  export default CalendarDevExtreme;