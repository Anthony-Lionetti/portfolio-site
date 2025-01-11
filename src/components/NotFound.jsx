import { Button, Heading, Text } from '@radix-ui/themes'

export default function NotFound() {
  return (
    <section className='section'>
        <Heading size={"7"}>404 Page Not Found</Heading>
        <Text size="4" color='green' style={{width:"18ch", textAlign:"center"}}>This is not the page you are looking for</Text>
        <a href='/' className='unset'>
            <Button>
                Return Home
            </Button>
        </a>
    </section>
  )
}
