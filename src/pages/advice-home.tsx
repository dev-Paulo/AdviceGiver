import { Box, Button, Heading, Image, useFocusEffect } from "@chakra-ui/react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/home-advice.css";

import imgDivider from "../assets/images/pattern-divider-mobile.svg";
import iconCircle from "../assets/images/icon-dice.svg";
import { AdviceModel } from "../models/advice-model";
import { useEffect, useState } from "react";

export function AdviceHome() {
  const [advice, setAdvice] = useState<AdviceModel>({});

  function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((slip) => {
        setAdvice(slip);
        console.log(advice);
      });
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="w-100 advice-content d-flex justify-content-center align-items-center">
      <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
        <Heading  as='h4' size='xl' className="advice-instructions mb-4 text-center">Click the dice icon to get a new advice!</Heading>
        <div className="advice-card text-center">
          <p id="advice-number">ADVICE #{advice.slip?.id}</p>

          <h2 id="advice-text">"{advice.slip?.advice}" </h2>

          <Box boxSize="sm">
            <Image
              src={imgDivider}
              alt="Divider of the advice"
              className="mb-4"
            />
          </Box>

          <div className="d-flex justify-content-center">
            <Box boxSize="sm" id="circle-advice">
              <Image onClick={getAdvice} src={iconCircle} alt="Icon of the advice circle" />
            </Box>
          </div>
        </div>        
      </Container>
    </div>
  );
}
