import { Badge, Blockquote, Card, Flex, Heading, Text } from "@radix-ui/themes"
import { entireBookShelf } from "../constants/Bookshelf"
import { StarIcon } from "@radix-ui/react-icons"

function Bookself() {
  const sortedBooks = entireBookShelf.sort((a, b) => a.rating <= b.rating);
  const currentBook = entireBookShelf.filter((book) => book.yearsRead.length > 0 && book.rating === 0)[0] 

  return (
    <section className='section'>
      <Flex direction={"row"} justify={"between"} width={"80%"}>
        <Flex direction={"column"} justify={"start"} gap={"1"}>
          <Heading size={"8"} color="green">Welcome to my Bookshelf :)</Heading>
          <Blockquote size={"3"} color="green" style={{width:"60ch"}}>
            <Text color="gray">I hated reading. <br />Three years ago that all changed. <br />My mind has opened.</Text>
          </Blockquote>
        </Flex>
        <Flex direction={"column"} justify={"center"} flexGrow={"1"}>
            <Heading size={"4"} color="green" mb={".5rem"}>Currently Reading:</Heading>
            <Heading size={"3"}>{currentBook.title.split(":")[0]}</Heading>
            <Heading size={"2"} color="gray">By {currentBook.author}</Heading>
        </Flex>

      </Flex>

      {/* Book Cards */}
      <Flex 
        direction={"column"} 
        gap={"3"} 
        width={"82%"} 
        px={"1rem"}
        pt={"1rem"} 
        style={{
          overflow: "auto",
          flexGrow: 1,    // allows the container to grow
          flexShrink: 1,  // allows the container to shrink
          height: 0    // important for proper scrolling in a flex container
        }}
      >
        {sortedBooks.map((book) => {
          return <BookCard key={book.author} {...book} />
        })}
      </Flex>

    </section>
  )
}

export default Bookself



function BookCard({author, title, overview, rating, yearsRead}){
  const badgeColor = rating > 3.5 ? "green" : "yellow"

  return (
    <Card style={{ flex: '0 0 auto' }}>
      <Flex align={"top"} gap={"3"} style={{minHeight:'90px'}}>
        {/* Title & Author */}
        <Flex direction={"column"} gap={"2"} style={{width:"20ch"}}>
          <Heading size={"5"}>{title.split(":")[0]}</Heading>
          <Heading size={"2"} color="gray">{author}</Heading>
        </Flex>
        {/* Description */}
        <Flex align={"top"} style={{width:"45ch"}}>
          <Text size={'1'}>{overview}</Text>
        </Flex>

        {/* Badges */}
        <Flex direction={"column"} ml="auto" gap={"2"}>
          {rating != 0 && <Badge color={badgeColor}>{rating}<StarIcon /></Badge>}
          {(rating === 0 && yearsRead.length === 0) && <Badge color={'gray'}>In reading List</Badge>}
          {(rating === 0 && yearsRead.length > 0) && <Badge color={'iris'}>Reading Now</Badge>}
          {yearsRead.map((year) => {
            return <Badge key={`${author}_${year}`} color="blue">{year}</Badge>;
          })}
        </Flex>
      </Flex>
    </Card>
  )
}