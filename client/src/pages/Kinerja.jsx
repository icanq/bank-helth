import React, { useEffect, useState, useRef } from 'react';

import styled from 'styled-components';

const T = styled.table`
  border-collapse: collapse;
`;
const Td = styled.td`
  border: 1px solid #999;
  padding: 0.5rem;
  text-align: left;
`;
const Th = styled.th`
  border: 1px solid #999;
  padding: 0.5rem;
  text-align: left;
`;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

function Kinerja() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);

  let mounted = useRef(true);
  const arrPeriod = data.map((el) => el.ProcessedDatum?.periode);
  const SetPeriod = new Set(arrPeriod);
  const period = [...SetPeriod];

  const fetchData = () => {
    return fetch('http://localhost:3001/file').then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
  };

  useEffect(() => {
    mounted.current = true;
    if (data.length) {
      return;
    }
    fetchData().then((items) => {
      if (mounted.current) {
        setTimeout(() => {
          setData(items);
          setLoading(false);
          setFilter(items)
        }, 600);
      }
    });
    return () => (mounted.current = false);
  }, [data]);

  const filterPeriode = (periode) => {
    if (periode === "all") {
      setFilter(data)
      console.log('masuk')
    } else {
      const result = data.filter((e) => e.ProcessedDatum.periode === +periode)
      setFilter(result)
    }
  }
  if (loading)
    return (
      <StyledSpinner>
        <circle
          className='path'
          cx='25'
          cy='25'
          r='20'
          fill='none'
          strokeWidth='4'
        />{' '}
      </StyledSpinner>
    );
  return (
    <div>
      <p>Pilih Periode Data</p>
      <select
        onChange={(e) => filterPeriode(e.target.value)}
      >
        <option value='all'>all</option>
        {period.map((el, idx) => {
          return <option key={idx} value={el}>{el}</option>;
        })}
      </select>
      <div>
        <T>
          <thead style={{ backgroundColor: 'papayawhip' }}>
            <tr>
              <Th rowSpan={2}>Sandi Bank</Th>
              <Th>Kredit</Th>
              <Th colSpan={2}>Profitabilitas</Th>
              <Th>Likuiditas</Th>
              <Th>Efisiensi</Th>
              <Th>Resiliensi</Th>
              <Th colSpan={6}>Rekap Komposit</Th>
            </tr>
            <tr>
              <Th>NPL</Th>
              <Th>ROA</Th>
              <Th>ROE</Th>
              <Th>LDR</Th>
              <Th>BOPO</Th>
              <Th>CAR</Th>
              <Th>Rk</Th>
              <Th>Pr</Th>
              <Th>Lk</Th>
              <Th>Ef</Th>
              <Th>Re</Th>
              <Th>Komposit</Th>
            </tr>
          </thead>
          <tbody>
            {filter.map((el) => (
              <tr key={el.id}>
                <Td>{el.ProcessedDatum.id}</Td>
                <Td>{el.ProcessedDatum.NPL} %</Td>
                <Td>{el.ProcessedDatum.ROA} %</Td>
                <Td>{el.ProcessedDatum.ROE} %</Td>
                <Td>{el.ProcessedDatum.LDR} %</Td>
                <Td>{el.ProcessedDatum.BOPO} %</Td>
                <Td>{el.ProcessedDatum.CAR} %</Td>
                <Td style={{ backgroundColor: el.Rk }}></Td>
                <Td style={{ backgroundColor: el.Pr }}></Td>
                <Td style={{ backgroundColor: el.Lk }}></Td>
                <Td style={{ backgroundColor: el.Ef }}></Td>
                <Td style={{ backgroundColor: el.Re }}></Td>
                <Td style={{ backgroundColor: el.Komposit }}></Td>
              </tr>
            ))}
          </tbody>
        </T>
      </div>
    </div>
  );
}

export default Kinerja;
