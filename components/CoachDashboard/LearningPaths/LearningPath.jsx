import { 
  VStack,
  Button,
  Box,
  Flex,
  Text
} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { useEffect } from "react";

// these components write to the console when mounted
const StartingStep = ({ onNext }) => {
  useEffect(() => {
    console.log("mounted component A");
  }, []);

  return (
    <Box minH="100px" rounded="lg" bg="gray.700">
      <VStack p="4" alignItems="flex-start" py={4}>
      <Text textAlign="left">Learning Path Step Description and goals, This will be a short paragraph and contains a high level overview of this particular step</Text>
      <ul style={{marginLeft: '20px'}}>
        <li>Goal 1</li>
        <li>Goal 2</li>
        <li>Goal 3</li>
        <li>Goal 4</li>
        <li>Goal 5</li>
      </ul>
      <Flex width="100%" justify="flex-end">
        <Button mr="4" onClick={onNext}>Start Session</Button>
        <Button colorScheme="green" onClick={onNext}>Next Step</Button>
      </Flex>
    </VStack>
    </Box>
  );
};

const MiddleStep = ({ onNext, onBack }) => {
  useEffect(() => {
    console.log("mounted component B");
  }, []);

  return (
    <Box minH="100px" rounded="lg" bg="gray.700">
      <VStack py={4}>
        <h1>Hello CodeSandbox</h1>
        <Button onClick={onNext}>Go Next</Button>
        <Button onClick={onBack}>Go Back</Button>
      </VStack>
    </Box>
  );
};
const EndStep = ({ onBack }) => {
  useEffect(() => {
    console.log("mounted component c");
  }, []);

  return (
    <Box minH="100px" rounded="lg" bg="gray.700">
      <VStack py={4}>
        <h1>Hello CodeSandbox</h1>
        <Button onClick={onBack}>Go Back</Button>
      </VStack>
    </Box>
  );
};

const steps = [
  { label: "Aim Training", content: "" },
  { label: "Movement Fundamentals", content: "" },
  { label: "Advanced Movement Fundamentals", content: "" },
  { label: "Map Awareness", content: "" },
  { label: "End Game Simulations", content: "" }
];

// when the stepper is on vertical mode you can see both logs being written to the console
export default () => {
  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0
  });

  return (
    <Steps activeStep={activeStep} p="8" orientation="vertical">
      {steps.map(({ label, content }, i) => {
        if(i === 0){
          return (
            <Step label={label} key={label}>
              <StartingStep onNext={nextStep} onBack={prevStep}/>
            </Step>
          )
        } else if(i > 0 && i < steps.length - 1){
          return (
            <Step label={label} key={label}>
              <MiddleStep onNext={nextStep} onBack={prevStep} />
            </Step>
          )
        }
        return (
          <Step label={label} key={label}>
            <EndStep index={i} onNext={nextStep} onBack={prevStep} />
          </Step>
        )
      })}
    </Steps>
  );
};
