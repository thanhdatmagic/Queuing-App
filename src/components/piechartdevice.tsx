import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'ngưng hoạt động', value:10 }
];
const data02 = [
  { name: 'Hoạt động', value: 90},
  
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={20} height={20}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={20} fill="##ff7506" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={30} outerRadius={40} fill="#eaeaec" label />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
