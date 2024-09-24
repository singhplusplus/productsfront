import { useRef } from "react";
import { Box, Button, Container, Checkbox, PasswordInput, TextInput } from "@mantine/core";

function LoginPage() {
  const usernameRef = useRef("")
  const passwordRef = useRef("")

  const buttonClicked = (msg) => {
    console.log(msg);
    console.log(usernameRef.current.value, passwordRef.current);
    
  }

  return <Container>
    <Box lh={3}>
      <TextInput ref={usernameRef} withAsterisk label="Username" description="example@domain.com" />
      <PasswordInput ref={passwordRef} withAsterisk label="Password" 
        description="min length should be 8 characters" />
      <Checkbox mt={5} defaultChecked label="Keep me logged in." />
      <Button onClick={() => {buttonClicked("Hello")} }>Login</Button>
    </Box>
  </Container>
}

export default LoginPage;