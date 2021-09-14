import { indigo, blue, teal } from '@material-ui/core/colors';
const appointments = [
  {
    title: 'Prepare 2015 Marketing Plan',
    startDate: new Date(2021, 8, 13, 13, 0),
    endDate: new Date(2021, 8, 13, 13, 30),
    priority: 2,
    location: 'Room 3',
  }, {
    title: 'Brochure Design Review',
    startDate: new Date(2021, 8, 14, 14, 10),
    endDate: new Date(2021, 8, 14, 15, 30),
    priority: 1,
    location: 'Room 1',
  },
  {
    title: 'Website Re-Design Plan',
    startDate: new Date(2021, 8, 29, 9, 30),
    endDate: new Date(2021, 8, 29, 11, 30),
    priority: 1,
    location: 'Room 3',
  }, {
    title: 'Book Flights to San Fran for Sales Trip',
    startDate: new Date(2021, 8, 15, 12, 0),
    endDate: new Date(2021, 8, 15, 13, 0),
    priority: 3,
    location: 'Room 2',
  }, {
    title: 'Install New Router in Dev Room',
    startDate: new Date(2021, 8, 15, 14, 30),
    endDate: new Date(2021, 8, 15, 15, 30),
    priority: 2,
    location: 'Room 3',
  }, {
    title: 'Approve Personal Computer Upgrade Plan',
    startDate: new Date(2021, 9, 4, 10, 0),
    endDate: new Date(2021, 9, 4, 11, 0),
    priority: 1,
    location: 'Room 1',
  }, {
    title: 'Final Budget Review',
    startDate: new Date(2021, 9, 6, 12, 0),
    endDate: new Date(2021, 9, 6, 13, 35),
    priority: 3,
    location: 'Room 1',
  }, {
    title: 'New Brochures',
    startDate: new Date(2021, 9, 6, 14, 30),
    endDate: new Date(2021, 9, 6, 15, 45),
    priority: 3,
    location: 'Room 3',
  }, {
    title: 'Install New Database',
    startDate: new Date(2021, 9, 10, 9, 45),
    endDate: new Date(2021, 9, 10, 11, 15),
    priority: 2,
    location: 'Room 2',
  }, {
    title: 'Approve New Online Marketing Strategy',
    startDate: new Date(2021, 9, 12, 12, 0),
    endDate: new Date(2021, 9, 12, 14, 0),
    priority: 1,
    location: 'Room 2',
  }, {
    title: 'Upgrade Personal Computers',
    startDate: new Date(2021, 9, 16, 15, 15),
    endDate: new Date(2021, 9, 16, 16, 30),
    priority: 2,
    location: 'Room 3',
  }, {
    title: 'Customer Workshop',
    startDate: new Date(2021, 9, 18, 11, 0),
    endDate: new Date(2021, 9, 18, 12, 0),
    priority: 3,
    location: 'Room 1',
  }, {
    title: 'Prepare 2015 Marketing Plan',
    startDate: new Date(2021, 9, 20, 11, 0),
    endDate: new Date(2021, 9, 20, 13, 30),
    priority: 1,
    location: 'Room 3',
  },
  {
    title: 'New Brochures',
    startDate: new Date(2021, 9, 23, 14, 30),
    endDate: new Date(2021, 9, 23, 15, 45),
    priority: 2,
    location: 'Room 3',
  }, {
    title: 'Install New Database',
    startDate: new Date(2021, 9, 23, 9, 45),
    endDate: new Date(2021, 9, 23, 11, 15),
    priority: 3,
    location: 'Room 2',
  }, {
    title: 'Approve New Online Marketing Strategy',
    startDate: new Date(2021, 9, 26, 12, 0),
    endDate: new Date(2021, 9, 26, 14, 0),
    priority: 1,
    location: 'Room 1',
  }, {
    title: 'Upgrade Personal Computers',
    startDate: new Date(2021, 9, 31, 15, 15),
    endDate: new Date(2021, 9, 31, 16, 30),
    priority: 2,
    location: 'Room 3',
  }, {
    title: 'Install New Database',
    startDate: new Date(2021, 9, 31, 9, 45),
    endDate: new Date(2021, 9, 31, 11, 15),
    priority: 3,
    location: 'Room 2',
  },
];

const resources = [{
  fieldName: 'location',
  title: 'Location',
  instances: [
    { id: 'Room 1', text: 'Room 1', color: indigo },
    { id: 'Room 2', text: 'Room 2', color: blue },
    { id: 'Room 3', text: 'Room 3', color: teal },
  ],
}, {
  fieldName: 'priority',
  title: 'Priority',
  instances: [
    { id: 1, text: 'High Priority', color: teal },
    { id: 2, text: 'Medium Priority', color: blue },
    { id: 3, text: 'Low Priority', color: indigo },
  ],
}];

export { appointments, resources };