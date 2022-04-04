import React, { useState }   from 'react'  
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'  


export default function Calculator(){
  const [Height, setHeight] = useState(0);
  const [Weight, setWeight] = useState(0);
  const [BMI, setBMI] = useState(0); 
  const [Results, setResults] = useState("")   

  const Links = [
  'https://www.ucsfhealth.org/education/tips-for-staying-healthy',
  'https://www.ucsfhealth.oarg/education/tips-for-staying-healthy',
  'https://www.ucsfhealth.org/education/tips-for-staying-healthy',
  'https://www.ucsfhealth.org/education/tips-for-staying-healthy',
  'https://www.ucsfhealth.org/education/tips-for-staying-healthy',
  'https://www.ucsfhealth.org/education/tips-for-staying-healthy',
  'https://www.ucsfhealth.org/education/tips-for-staying-healthy' 
  ]
  const Category = [
  `Severe thinness -> We recommend to visit the next link ${Links[0]}` ,
  `Moderate thinness -> We recommend to visit the next link ${Links[1]}` , 
  `Acceptable thinness -> We recommend to visit the next link ${Links[2]}` ,
  `Normal weight -> We recommend to visit the next link ${Links[3]}` ,
  `Overweight -> We recommend to visit the next link ${Links[4]}` ,
  `Mild obesity (Type I) -> We recommend to visit the next link ${Links[5]}`, 
  `Medium obesity (Type II) -> We recommend to visit the next link ${Links[6]}`,  
  `Morbid obesity (Type III -> We recommend to visit the next link ${Links[7]})` 
  ]

  function calculateBMI(){
    let BMI =  Weight / Math.pow(Height,2) 
    setBMI(BMI.toFixed(3)) 
    if(BMI < 16) setResults(Category[0])
    if(BMI >= 16 && BMI < 17) setResults(Category[1])  
    if(BMI >= 17 && BMI < 18.5) setResults(Category[2])
    if(BMI >= 18.5 && BMI < 25) setResults(Category[3])
    if(BMI >= 25 && BMI < 30) setResults(Category[4])
    if(BMI >= 30 && BMI < 35) setResults(Category[5])
    if(BMI >= 35 && BMI < 40) setResults(Category[6])
    if(BMI > 40) setResults(Category[7])  
  }
  return (
    <>
      <Container > 
        <CardContent Box>BODY MASS INDEX</CardContent>
      </Container>
      <Container fixed> 
      <FormControl>
        <FormGroup>
          <FormLabel>Height: </FormLabel>
          <input type={'number'} placeholder='Enter your height...' onChange={(e) => setHeight(e.target.value)}></input>
        </FormGroup> 
        <FormGroup>
          <FormLabel>Weight: </FormLabel>
          <input type={'number'} placeholder='Enter your weight...' onChange={(e) => setWeight(e.target.value)}></input>
        </FormGroup> 
        <FormGroup>
          <Button onClick={(e) => calculateBMI(e)}>Check</Button> 
        </FormGroup>  
          <Card>
            <CardContent>
              RESULTS: 
            </CardContent>
            <CardContent> 
              Your BMI is: {BMI} 
            </CardContent> 
            <CardContent> 
              Your Height is:  {Height} 
            </CardContent>
            <CardContent> 
              Your Weight is: {Weight} 
            </CardContent>
            <CardContent> 
              Your Results are: {Results}
            </CardContent>  
          </Card>  
      </FormControl>
      </Container>
    </>  
  ); 
}  