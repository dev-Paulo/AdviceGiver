import { Box, Heading, Image } from "@chakra-ui/react";
import { Container, Spinner } from "react-bootstrap";
import "../styles/home-advice.css";

import imgDivider from "../assets/images/pattern-divider-mobile.svg";
import iconCircle from "../assets/images/icon-dice.svg";
import { AdviceModel } from "../models/advice-model";
import { useEffect, useState } from "react";
import { MessageModel } from "../models/message-model";

export function AdviceHome() {
  const [advice, setAdvice] = useState<AdviceModel>({});
  const [message, setMessage] = useState<MessageModel>({});
  const [loading, setLoading] = useState(false);

  function getAdvice() {
    setLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then(async (res) => {
        if (!res.ok) {
          setMessage(await res.json());
          setLoading(false);
        } else {
          return res.json();
        }
      })
      .then((slip) => {
        setLoading(false);
        setAdvice(slip);        
      });
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className=" advice-content d-flex justify-content-center align-items-center">
      <Container className="h-100 d-flex flex-column align-items-center justify-content-center">
        <Heading
          as="h4"
          size="xl"
          className="advice-instructions mb-4 text-center"
        >
          Click the dice icon to get a new advice!
        </Heading>    

        <div className="advice-card text-center">
          {loading ? (
            <div id="loading-spinner">
              <Spinner animation="grow" />
            </div>
          ) : (
            <>
              <p id="advice-number">
                {advice ? "ADVICE #" + advice.slip?.id : message.message?.type}
              </p>

              <h2 id="advice-text">
                "{advice ? advice.slip?.advice : message.message?.text}"
              </h2>

              <Box boxSize="sm">
                <Image                  
                  src={imgDivider}
                  alt="Divider of the advice"
                  className="mt-4 mb-5"                  
                />
              </Box>
            </>
          )}

          <div className="d-flex justify-content-center">
            <Box boxSize="sm" id="circle-advice">
              <Image
                onClick={getAdvice}
                src={iconCircle}
                alt="Icon of the advice circle"
              />
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
}
