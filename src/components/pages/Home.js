import React from 'react';
import '../../App.css';
import { GiFlashlight } from 'react-icons/gi';
import { BiDoughnutChart, BiError, BiHeart } from 'react-icons/bi';
import Chart from 'react-google-charts';
import Header from './header';

export const piechartdata = [
  ['Task','Work'],
  ['Open',4],
  ['Bounce',3],
  ['Unsubscribed',4],
];


export const dataBar =  [
  ['Month','Tesla Model S', 'BMW 5 Series'],
    ['Jan',542, 443 ],    
      ['Feb', 320, 780],
      ['Mar', 553, 453],
      ['Apr', 326, 434],
      ['Mai', 568, 610],
      ['Jun', 756, 895],
      ['Jul',412, 243],
      [ 'Aug',280, 580],
      ['Sep', 453, 353],
      ['Oct', 300, 364],
      [ 'Nov',368, 410],
      ['Dec', 636, 695],
  ];

export const tdArray = [
    ["ID","Name","Salary","Country","City"],
      [ "1" , "Dakota Rice" , "$36,738" , "Niger" , "Oud-Turnhout" ] ,
      [ "2" , "Minerva Hooper" , "$23,789" , "Curaçao" , "Sinaai-Waas" ] ,
      [ "3" , "Sage Rodriguez" , "$56,142" , "Netherlands" , "Baileux" ] ,
      [ "4" , "Philip Chaney" , "$38,735" , "Korea, South" , "Overland Park" ] ,
      [ "5" , "Doris Greene" , "$63,542" , "Malawi" , "Feldkirchen in Kärnten" ] ,
      [ "6" , "Mason Porter" , "$78,615" , "Chile" , "Gloucester" ]
  ];

export const linechartdata = [
    ['Hour','Open','Clicked','Clicked second time'],
    ['9:00AM',250,50,0],
    ['12:00PM',400,150,100],
    ['3:00PM',500,100,50],
    ['6:00PM',500,250,100],
    ['9:00PM',550,300,200],
    ['12:00AM',600,350,250],
    ['3:00AM',700,450,300],
    ['6:00AM',750,450,300],
];

export const piechartoptions = {
  title: "Email Statistics",
  width: "400px",
  height: "400px",
  legend: { position: 'bottom' }
};

export const linechartoptions = {
  title: "Work is done",
  curveType: 'function',
  chartArea: {
    left: "7%",
    top: "15%",
    width: "90%",
    height: "70%",
  },
  width: '600px',
  height: '400px',
  legend: {position: 'bottom' }
};

export const columnchartoptions = {
  title: '2017 Sales',
  width: '500px',
  height: '400px',
  
};

export const tablechartoptions = {
  title: 'Tasks',
  width: '500px',
  height: '400px',
};

export default function Home() {
  return (
    <>
    
    <div className='content'>
    <Header/>
      <div className='cards'>
        <div className='card'>
          <div className='icon-case'>
            <BiDoughnutChart/>
          </div>
          <div>
            <h5>Number</h5>
            <h3>150 GB</h3>
          </div>
        </div>
        <div className='card'>
          <div className='icon-case'>
            <GiFlashlight/>
          </div>
          <div>
            <h5>Revenue</h5>
            <h3>$ 1,345</h3>
          </div>
        </div>
        <div className='card'>
          <div className='icon-case'>
            <BiError/>
          </div>
          <div>
            <h5>Errors</h5>
            <h3>23</h3>
          </div>
        </div>
        <div className='card'>
          <div className='icon-case'>
            <BiHeart/>
          </div>
          <div>
            <h5>Followers</h5>
            <h3>+45K</h3>
          </div>
        </div>
        <div className='charts'>
          <div className='chart1'>
              <Chart
                className='linechart2'
                chartType='LineChart'
                data={linechartdata}
                options={linechartoptions}
              />
          </div>
        <div className='chart2'>
          <Chart
            className='piechart2'
            chartType='PieChart'
            data={piechartdata}
            options={piechartoptions}
          />
        </div>
      </div>
        <div className='charts2'>
          <div className='chart3'>
              <Chart
                chartType='ColumnChart'
                data={dataBar}
                options={columnchartoptions}
              />
          </div>
          <div className='chart4'>
            <Chart
              chartType='Table'
              data={tdArray}
              options={tablechartoptions}
            />
          </div>
        </div>
      </div>
    </div>
     
    </>
  );
}
