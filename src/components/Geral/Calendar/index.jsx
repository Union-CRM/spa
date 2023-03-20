import * as React from "react";
import { useState, useEffect } from "react";
import {
  Frame,
  Header,
  ButtonLeft,
  ButtonRight,
  Body,
  Box,
  Day,
  Months,
} from "./styles";
import IconSystem from "../../assets/IconSystem";

export function Calendar() {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September ",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  //prevMonthDays, nextMonthDays
  const daysInMonth = isLeapYear(year) ? DAYS_LEAP[month] : DAYS[month];
  const daysInNextMonth = isLeapYear(year)
    ? DAYS_LEAP[month + 1]
    : DAYS[month + 1];
  let daysToCompleteBlock = 0;
  if (daysInMonth + startDay > 35) {
    daysToCompleteBlock = 42 - daysInMonth - startDay;
  } else {
    daysToCompleteBlock = 35 - daysInMonth - startDay;
  }

  return (
    <Frame>
      <Header>
        <Box>
          <ButtonLeft onClick={() => setDate(new Date(year, month - 1, day))}>
            <IconSystem
              icon={"arrowLeft"}
              width={"15px"}
              height={"18px"}
              left={"7px"}
            />
          </ButtonLeft>
          <Months>{MONTHS[month]}</Months>

          <ButtonRight onClick={() => setDate(new Date(year, month + 1, day))}>
            <IconSystem
              icon={"arrowRight"}
              width={"15px"}
              height={"18px"}
              right={"7px"}
            />
          </ButtonRight>
        </Box>
      </Header>

      <Body>
        {DAYS_OF_THE_WEEK.map((d) => (
          <Day key={d}>
            <p>{d}</p>
          </Day>
        ))}

        {Array(daysInMonth + (startDay + daysToCompleteBlock))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 1);
            const prevMonth = month === 0 ? 11 : month - 1;
            const nextMonth = month === 11 ? 0 : month + 1;
            const prevMonthDays = isLeapYear(year)
              ? DAYS_LEAP[prevMonth]
              : DAYS[prevMonth];
            const nextMonthDays = isLeapYear(year)
              ? DAYS_LEAP[nextMonth]
              : DAYS[nextMonth];

            if (index < startDay) {
              return (
                <Day key={index} isPrevMonth>
                  <ant> {prevMonthDays + d}</ant>
                </Day>
              );
            } else if (index >= daysInMonth + startDay && index < 42) {
              return (
                <Day key={index} isNextMonth>
                  <ant> {d - daysInMonth}</ant>
                </Day>
              );
            } else {
              return (
                <Day
                  key={index}
                  isToday={d === today.getDate()}
                  isSelected={d === day}
                  onClick={() => setDate(new Date(year, month, d))}
                >
                  {d}
                </Day>
              );
            }
          })}
      </Body>
    </Frame>
  );
}
