import { Badge, Blockquote, Card, Flex, Heading, Text } from "@radix-ui/themes"
import { entireBookShelf } from "../constants/Bookshelf"
import { StarIcon } from "@radix-ui/react-icons"

function Bookself() {
const sortedBooks = entireBookShelf.sort((a, b) => {
    // Primary sort by rating (descending)
    const ratingDiff = b.rating - a.rating;
    if (ratingDiff !== 0) return ratingDiff;

    // Secondary sort by yearsRead (non-empty first)
    return (b.yearsRead.length > 0 ? 1 : 0) - (a.yearsRead.length > 0 ? 1 : 0);
  });


  return (
    <section className='section'>
      <Flex direction={"column"} justify={"start"} gap={"1"} className="book-container">
        <Heading size={"8"} color="green" className="book-heading">Welcome to my Bookshelf :)</Heading>
        <Blockquote size={"3"} color="green" mt={".5rem"} ml={".5%"} className="hiku">
          <Text color="gray">I hated reading. <br />Three years ago that all changed. <br />My mind has opened.</Text>
        </Blockquote>
      </Flex>

      {/* Book Cards */}
      <Flex 
        direction={"column"} 
        gap={"3"}  
        pt={"1rem"} 
        className="book-container book-card-container"
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
    <Card className="book-card">
      <Flex align={"top"} gap={"3"} style={{minHeight:'90px'}}>
        {/* Title & Author */}
        <Flex direction={"column"} gap={"2"} style={{width:"20ch"}}>
          <Heading size={"5"} className="book-card-title">{title.split(":")[0]}</Heading>
          <Heading size={"2"} color="gray" className="book-card-author">{author}</Heading>
        </Flex>
        {/* Description */}
        <Flex align={"top"} style={{width:"45ch"}} className="book-card-description">
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