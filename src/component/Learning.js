import React, { useEffect, useState, useRef } from "react";
import Button from "./learningCOmponen/Button";
// import country_list from "./learningCOmponen/country";
import Place from "./learningCOmponen/Place";
import Counter from "./learningCOmponen/Counter";
import EmployeeformLearn from "./learningCOmponen/EmployeeformLearn";

function Learning() {
  let title = "Learning";
  let location = "dadar";
  let dadarAddr = "dadar ruby";
  let rabaleAddr = "rabale sigma it";
  let neooffice = [
    {
      location: "Dadar, Mumbai",
      address:
        "The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028",
    },
    {
      location: "Rabale, Mumbai",
      address:
        "Sigma IT Park, Unit No. 501, TTC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701",
    },
    {
      location: "Parel, Mumbai",
      address:
        "Business Arcade, Sayani Road, Opp. S. T Bus Stand, Lower Parel, Mumbai, Maharashtra 400013",
    },
    {
      location: "Pune",
      address:
        "IT-09, 10th Floor, Blue Ridge SEZ, Hinjewadi, Pune, Maharashtra 411057",
    },
    {
      location: "Noida",
      address:
        "WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301",
    },
  ];

  let template = (
    <div>
      <button className=" btn btn-primary">im button</button>
    </div>
  );

  const [classes, setclasses] = useState(["bg-red-500", "text-2xl"]);
  const [newListVal, setnewListVal] = useState("hello");
  const [list, setlist] = useState(["parel", "dadar"]);
  const [customStyle, setCustomStyle] = useState({
    background: "yellow",
    fontSize: "30px",
    color: "black",
  });

  const setBgDefault = () => {
    setCustomStyle({ ...customStyle, background: "yellow" });
  };

  useEffect(() => {
    console.log("im useEffect");

    // return () => {

    // };
  }, []);

  // useEffect(() => {

  // }, []); runs only once

  // useEffect(() => {

  // }); runs every time on component re render

  // useEffect(() => {

  // }, [dependency]); rruns every time on dependency change
  const lastCountOfList = useRef(0);
  const officeLocaion = useRef("");
  useEffect(() => {
    let l2 = list.length;
    console.log(
      "im init of useEffect",
      l2 - lastCountOfList.current,
      lastCountOfList
    );

    return () => {
      console.log("im cleanup of useEffect");
      lastCountOfList.current = list.length;
    };
  }, [list]);

  const [myfiltervalue, setmyfiltervalue] = useState("");

  return (
    <>
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-3xl">{title}</h1>
        <div>
          if and else
          {location === "dadar" ? (
            <div>{dadarAddr}</div>
          ) : (
            <div>{rabaleAddr}</div>
          )}
          <br />
          <br />
          if only
          {location === "dadar" && <h1>dadar && logic</h1>}
          <br />
          <br />
          template
          {template}
          <br />
          <br />
          component
          {location === "rabale" ? (
            <Button text="rabale" />
          ) : (
            <Button text="dadar" />
          )}
        </div>
        <br />
        <br />
        math
        {30 + 20}
        <br />
        <br />
        map
        <select
          value={myfiltervalue}
          onChange={(e) => {
            setmyfiltervalue(e.target.value);
          }}
        >
          <option value="">all</option>
          <option value="dadar">dadar</option>
          <option value="parel">parel</option>
        </select>
        <ol className="list-decimal ml-10 mt-5 flex flex-wrap justify-center gap-2">
          {neooffice
            .filter((e) =>
              e.location.toLocaleLowerCase().includes(myfiltervalue)
            )
            .map((place, i) => (
              <Place key={i} title={place.location} address={place.address} />
            ))}
        </ol>
      </div>

      <br />
      <br />
      <br />

      <h1 className={classes.join(" ")}>classes from variable</h1>
      <h1 style={{ background: "blue" }}>inline style</h1>
      <h1
        style={customStyle}
        onMouseOver={() => {
          setCustomStyle({ ...customStyle, background: "red" });
        }}
        onMouseLeave={setBgDefault}
      >
        inline style
      </h1>

      <br />
      <br />
      <br />

      <div className="mx-auto w-100px">
        {list.map((e, i) => (
          <div key={i}>{e}</div>
        ))}

        <input
          ref={officeLocaion}
          className="input-primary input"
          // value={newListVal}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            setlist([...list, officeLocaion.current?.value]);
          }}
        >
          add
        </button>
        <br />
        <br />
        <br />
        <Counter />
        <EmployeeformLearn />
      </div>
    </>
  );
}

export default Learning;
