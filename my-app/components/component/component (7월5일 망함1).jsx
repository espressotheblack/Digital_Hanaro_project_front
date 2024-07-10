/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/oXyhDarPNbM
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from "next/link"
import Image from 'next/image';
import ReactPaginate from 'react-paginate';
import { Input } from "@/components/ui/input"
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import Select from 'react-select'
import { Button } from "@/components/ui/button"
import { ResponsivePie, Pie } from "@nivo/pie"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveRadar } from '@nivo/radar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faSignal } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faBatteryFull } from '@fortawesome/free-solid-svg-icons';

import homeIcon from '../../src/assets/homeicon.jpg';

// Import global styles
import './globals.css';

function MyComponent() {
  return <FontAwesomeIcon icon={faChevronLeft} />;
}

export default MyComponent;

export function Component() {
  const [data, setData] = useState(null) 
  const [selectedRegion, setSelectedRegion] = useState('');
  const [ageGroup, setAgeGroup] = useState('');

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    sendSelectionToBackend(region, ageGroup);
  };

  const handleAgeChange = (age) => {
    setAgeGroup(age);
    sendSelectionToBackend(selectedRegion, age);
  };

  const sayHi = (temp) => {
    console.log("say Hi")
  };

  // const sendSelectionToBackend = async (region, age) => {
  //   try {
  //       const response = await axios.post('http://44.223.115.155:5000/api/selection', { "region": region["value"], "age": age["value"]});
  //       console.log('백엔드 응답:', response.data);
  //   } catch (error) {
  //     console.error('백엔드로 선택 사항 전송 중 오류 발생:', error);
  //   }
  // };
  useEffect(() => {
    const sendSelectionToBackend = async (region, age) => {
      try {
        const response = await axios.post('http://44.223.115.155:5000/api/selection', { "region": region["value"], "age": age["value"]});
        console.log('백엔드 응답:', response.data);
        setData(response.data); // 받은 데이터를 상태에 저장
      } catch (error) {
        console.error('백엔드로 선택 사항 전송 중 오류 발생:', error);
      }
    };

    // 예시로 한 번 요청을 보내는 시나리오
    sendSelectionToBackend({ value: 'someRegion' }, { value: 'someAge' });
  }, []);
  
  const options = [
    { value: '서울', label: '서울' },
    { value: '부산', label: '부산' },
    { value: '인천', label: '인천' },
    { value: '성남시', label: '성남' }
  ];

  const options2 = [
    { value: '10대', label: '10대' },
    { value: '20대', label: '20대' },
    { value: '30대', label: '30대' }
  ];

  const options3 = [
    { category: '평균', value: 20 },
    { category: '나', value: 37 },
    { category: '나', value: 37 }
  ];

  const defaultData = [
    {
      "taste": "교육",
      "chardonay": 93,
      "carmenere": 71,
      "syrah": 37
    },
    {
      "taste": "교통",
      "chardonay": 77,
      "carmenere": 22,
      "syrah": 87
    },
    {
      "taste": "납부",
      "chardonay": 72,
      "carmenere": 100,
      "syrah": 86
    },
    {
      "taste": "사교활동",
      "chardonay": 104,
      "carmenere": 30,
      "syrah": 63
    },
    {
      "taste": "쇼핑",
      "chardonay": 93,
      "carmenere": 89,
      "syrah": 111
    },
    {
      "taste": "여유생활",
      "chardonay": 90,
      "carmenere": 80,
      "syrah": 95
    },
    {
      "taste": "요식",
      "chardonay": 85,
      "carmenere": 70,
      "syrah": 80
    },
    {
      "taste": "의료",
      "chardonay": 78,
      "carmenere": 65,
      "syrah": 88
    }
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      marginLeft: '10px',
      marginRight: '30px',
    }),
    singleValue: (provided) => ({
      ...provided,
      fontFamily: 'Noto Sans KR, Inter, sans-serif', // 한글을 지원하는 폰트 추가
    }),
    menu: (provided) => ({
      ...provided,
      fontFamily: 'Noto Sans KR, Inter, sans-serif', // 한글을 지원하는 폰트 추가
    }),
  };

  const Card = ({ title, content }) => (
    <div className="bg-white rounded-lg shadow-md p-4" style={{ width: '300px', height: '250px' }} >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  );
  const [currentPage, setCurrentPage] = useState(0); // currentPage 상태 설정

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage); // 페이지 변경 시 currentPage 업데이트
    // 추가적인 작업 수행 가능
  };

  // const transformData = (data) => {
  //   return data.map(item => ({
  //     taste: item.taste,
  //     chardonay: isNaN(item.chardonay) ? 0 : item.chardonay,  // NaN 값을 0으로 대체
  //     carmenere: isNaN(item.carmenere) ? 0 : item.carmenere,  // NaN 값을 0으로 대체
  //     syrah: Math.floor(Math.random() * 100) // syrah 값은 랜덤하게 추가
  //   }));
  // };
  

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="mb-0 flex items-center justify-between" style={{ backgroundColor: '#FFFFFF', height: '48px', padding: '0 16px' }}>
        <div className="flex items-center">
          <p className="text-lg font-semibold mr-2">9:41</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faSignal} className="w-6 h-6 mr-2" />
          <FontAwesomeIcon icon={faWifi} className="w-6 h-6 mr-2" />
          <FontAwesomeIcon icon={faBatteryFull} className="w-6 h-6" />
        </div>
      </div>
      <header className="flex items-center justify-between py-2" style={{ backgroundColor: '#FFFFFF' }}>
        <FontAwesomeIcon icon={faChevronLeft} className="w-6 h-6 ml-4" />
        <h1 className="text-lg inter">사장님ON</h1>
        <Image src={homeIcon} alt="Home Icon" className="w-6 h-6 mr-4" />
      </header>
      <nav className="flex items-center justify-center w-full mb-4 text-sm font-medium border-b" style={{ backgroundColor: '#FFFFFF' , marginBottom: '0px'}}>

        <Link href="#" className="p-2 font-hana2-bold" prefetch={false}>
                      캘린더
        </Link>
        <Link href="#" className="p-2 font-hana2-cm border-b-2 border-black" prefetch={false}>
            분석리포트
        </Link>
        <Link href="#" className="p-2 font-hana2-heavy" prefetch={false}>
            운영솔루션
        </Link>
        <Link href="#" className="p-2 font-hana2-medium" prefetch={false}>
            사업자대출
        </Link>
        <Link href="#" className="p-2 font-hana2-light" prefetch={false}>
            새소식
        </Link>
      </nav>

      <section className="py-4" style={{ backgroundColor: '#FFFFFF'}}>
          <h2 className="text-lg font-semibold" style={{ padding: '0 13px' }} >김하나 사장님</h2>
          <p className="text-sm font-semibold text-muted-foreground" style={{ padding: '0 13px' }} >지난 달 경비 지출은 어땠나요?</p>
          <p className="text-sm font-semibold text-muted-foreground" style={{ padding: '0 13px' }} >
            2024. 06. 01 - 2024. 06. 30 <ChevronDownIcon className="inline w-4 h-4" />
          </p>
      </section>
      <div>
      <section className="max-w-md mx-auto p-4" style={{ background: 'linear-gradient(to bottom, rgba(213, 241, 240, 0.9), #FFFFFF 60%)' }}>
        <h2 className="text-lg font-semibold" style={{ color: '#009591' }}>경비 분석 리포트</h2>
        <p className="text-sm font-semibold">
          지난달보다 개인 경비 지출이 <br /> 
          <span className="text-red-500">371,159원</span> 늘었어요
        </p>
        <p className="text-sm">
          <span style={{ color: '#FF0000', fontWeight: 'bold' }}>+18% 증가</span>
        </p>

        <div className="flex justify-around py-4">
          <PieChart className="w-24 h-24" />
          <PieChart2 className="w-24 h-24" />
        </div>
      </section>
        <div className="section-divider"></div>
        <section className="py-4" style={{ backgroundColor:  '#FFFFFF'}}>
          <div className="flex items-center py-2">
            <h2 className="text-sm font-semibold mr-4" style={{ padding: '0 13px' }} > 동종업계 비교한 <br /> 경비 지출을 확인해 보세요!</h2>
            <label htmlFor="input" className="mr-2">업종</label>
            <Select options={options3} />
          </div>
          <div className="grid grid-cols-2 gap-4 py-4">
            <BarChart className="w-full h-24" />
            <BarChart2 className="w-full h-24" />
            <BarChart3 className="w-full h-24" />
            <BarChart4 className="w-full h-24" />
          </div>
        </section>
        
        <section className="py-4" style={{ background: 'linear-gradient(to bottom, rgba(213, 241, 240, 0.9), #FFFFFF 60%)'}}>
          <h2 className="text-lg font-semibold" style={{ padding: '0 13px' }}>손님ON</h2>
          <p className="text-sm" style={{ padding: '0 13px' }}>가게 지역과 손님 연령대를 선택하여 <br /> 해당 지역의 손님 지출 유형을 확인해 보세요!!</p>
          
          <div className="flex items-center py-2">
            <h2 className="text-sm font-semibold mr-4" style={{ padding: '0 30px' }}>시군구 지역</h2>
            <h2 className="text-sm font-semibold ml-4" style={{ padding: '0 90px' }}>연령대</h2>
          </div>
          
          <div className="flex items-center py-2">
            <div className="mr-8">
              <div className="flex items-center">
                <div className="relative">
                  <Select
                    id="region"
                    placeholder="선택해주세요"
                    options={options}
                    onChange={handleRegionChange}
                    className="ml-5"  // 필요한 마진을 조정합니다.
                    style={{ marginLeft: '20px' }} // 예시: 왼쪽에서부터 위치 조정
                  
                  />
                </div>
              </div>
            </div>
            
            <div className="ml-8">
              <div className="flex items-center">
                <div className="relative">
                  <Select
                    id="age"
                    placeholder="선택해주세요"
                    options={options2}
                    onChange={handleAgeChange}
                    className="mr-2" // 필요한 마진을 조정합니다.
                    style={{ marginRight: '20px' }} // 예시: 오른쪽에서부터 위치 조정
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <RadarChart data={data || defaultData} className="w-full h-64" />
          </div>
        </section>
        {/* New Card Slice Section */}
        <section className="py-4" style={{ backgroundColor: '#FFFFFF' }}>
          <h2 className="text-lg font-semibold text-center">페르소나 분석</h2>
          <div className="flex overflow-x-auto space-x-4 py-4" style={{ width: '100%', flexShrink: 0 }}>
            <div className="bg-white rounded-lg shadow-md p-4" style={{ minWidth: '400px', maxWidth: '600px', height: '250px' }}>
              <h3 className="text-lg font-semibold">Card Title 1</h3>
              <p>This is the content of card 1.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4" style={{ minWidth: '400px', maxWidth: '600px', height: '250px' }}>
              <h3 className="text-lg font-semibold">Card Title 2</h3>
              <p>This is the content of card 2.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4" style={{ minWidth: '400px', maxWidth: '600px', height: '250px' }}>
              <h3 className="text-lg font-semibold">Card Title 3</h3>
              <p>This is the content of card 3.</p>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "평균", count: 20, color: "#D9D9D9" },
          { name: "나", count: 37, color: "#F0649E" }
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 15, right: 0, bottom: 15, left: 40 }}
        padding={0.3}
        colors={({ id, data }) => data.color}
        axisBottom={null} // 축을 숨김
        axisLeft={null} // 축을 숨김
        enableGridY={false} // y 축 그리드도 숨김
        enableLabel={false} // 막대 라벨 활성화
        labelSkipWidth={30} // 라벨 간격 설정
        labelSkipHeight={35} // 라벨 간격 설정
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }} // 라벨 텍스트 색상 설정
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id, value }) => `${id}: ${value}`} // 툴팁 내용 설정
        legends={[]} // 범례를 모두 제거
        role="application"
        ariaLabel="A bar chart showing data"
      />
      <p className="text-right mt-0.001" style={{ marginRight: 55 ,fontWeight: 'bold' }}>고정비</p>
    </div>
  );
}


function BarChart2(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "평균", count: 20, color: "#D9D9D9" },
          { name: "나", count: 8, color: "#64BDBB" }
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 15, right: 0, bottom: 15, left: 40 }}
        padding={0.3}
        colors={({ id, data }) => data.color}
        axisBottom={null} // 축을 숨김
        axisLeft={null} // 축을 숨김
        enableGridY={false} // y 축 그리드도 숨김
        enableLabel={false} // 막대 라벨 활성화
        labelSkipWidth={30} // 라벨 간격 설정
        labelSkipHeight={35} // 라벨 간격 설정
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }} // 라벨 텍스트 색상 설정
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id, value }) => `${id}: ${value}`} // 툴팁 내용 설정
        legends={[]} // 범례를 모두 제거
        role="application"
        ariaLabel="A bar chart showing data"
      />
      <p className="text-right mt-0.001" style={{ marginRight: 55 ,fontWeight: 'bold' }}>관리비</p>
    </div>
  );
}

function BarChart3(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "평균", count: 10, color: "#D9D9D9" },
          { name: "나", count: 2, color: "#64BDBB" }
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 15, right: 0, bottom: 15, left: 40 }}
        padding={0.3}
        colors={({ id, data }) => data.color}
        axisBottom={null} // 축을 숨김
        axisLeft={null} // 축을 숨김
        enableGridY={false} // y 축 그리드도 숨김
        enableLabel={false} // 막대 라벨 활성화
        labelSkipWidth={30} // 라벨 간격 설정
        labelSkipHeight={35} // 라벨 간격 설정
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }} // 라벨 텍스트 색상 설정
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id, value }) => `${id}: ${value}`} // 툴팁 내용 설정
        legends={[]} // 범례를 모두 제거
        role="application"
        ariaLabel="A bar chart showing data"
      />
      <p className="text-right mt-0.001" style={{ marginRight: 55 ,fontWeight: 'bold' }}>대출이자</p>
    </div>
  );
}

function BarChart4(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "평균", count: 38, color: "#D9D9D9" },
          { name: "나", count: 33, color: "#64BDBB" }
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 15, right: 0, bottom: 15, left: 40 }}
        padding={0.3}
        colors={({ id, data }) => data.color}
        axisBottom={null} // 축을 숨김
        axisLeft={null} // 축을 숨김
        enableGridY={false} // y 축 그리드도 숨김
        enableLabel={false} // 막대 라벨 활성화
        labelSkipWidth={30} // 라벨 간격 설정
        labelSkipHeight={35} // 라벨 간격 설정
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }} // 라벨 텍스트 색상 설정
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id, value }) => `${id}: ${value}`} // 툴팁 내용 설정
        legends={[]} // 범례를 모두 제거
        role="application"
        ariaLabel="A bar chart showing data"
      />
      <p className="text-right mt-0.001" style={{ marginRight: 55 ,fontWeight: 'bold' }}>변동비</p>
    </div>
  );
}


function ChevronDownIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>)
  );
}


function HomeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}


function LineChart(props) {
  return (
    (<div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application" />
    </div>)
  );
}

function PieChart(props) {
  return (
    <div {...props} style={{ width: '200px', height: '200px' }} >
      <ResponsivePie
        data={[
          { id: "Jan", value: 76 , color: "#64BDBB" } ,
          { id: "Feb", value: 24 , color: "#F0649E" } ,
          // Remove the other months if you want to display only two segments
          // { id: "Mar", value: 129 },
          // { id: "Apr", value: 150 },
          // { id: "May", value: 119 },
          // { id: "Jun", value: 72 },
        ]}
        sortByValue = {false}
        margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
        cornerRadius={0}
        padAngle={0.7} // Increase padAngle for separation between slices
        borderWidth={0}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={({ id, data }) => data.color}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
        innerRadius={0.25}
      />
    </div>
  );
}


function UndoIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 7v6h6" />
      <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
    </svg>)
  );
}

function PieChart2(props) {
  return (
    <div {...props} style={{ width: '200px', height: '200px' }} >
      <ResponsivePie
        data={[
          { id: "Jan", value: 58 , color: "#64BDBB" } ,
          { id: "Feb", value: 42 , color: "#F0649E" } ,
          // Remove the other months if you want to display only two segments
          // { id: "Mar", value: 129 },
          // { id: "Apr", value: 150 },
          // { id: "May", value: 119 },
          // { id: "Jun", value: 72 },
        ]}
        sortByValue = {false}
        margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
        cornerRadius={0}
        padAngle={0.7} // Increase padAngle for separation between slices
        borderWidth={0}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        colors={({ id, data }) => data.color}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
        innerRadius={0.25}
      />
    </div>
  );
}


function RadarChart({ data }) {
  return (
    (<div {...props} style={{ width: '400px', height: '300px' }}>
      <ResponsiveRadar
        data={data}
        keys={['chardonay', 'carmenere', 'syrah']}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 20, right: 10, bottom: 20, left: 10 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={10}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        enableDots = {false}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: 0,
                translateY: 0,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
        role="application" />
    </div>)
  );
}

