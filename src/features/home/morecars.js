import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from '@/styles/MoreCars.module.css';

const mockdata = [
  {
    title: 'Top 10 places to visit in Norway this summer',
    image:
      'https://mainwebstorage.blob.core.windows.net/mediacontainers/styles/1920x1400/azure/2022-02/IMG_4547.jpg?h=4f2ced67&itok=4GYt_x2B',
    date: 'August 18, 2022',
  },
  {
    title: 'Best forests to visit in North America',
    image:
      'https://mainwebstorage.blob.core.windows.net/mediacontainers/styles/1920x1400/azure/2022-02/IMG_3982.jpg?h=6f6b169f&itok=TdJKiAYM',
    date: 'August 27, 2022',
  },
  {
    title: 'Hawaii beaches review: better than you think',
    image:
      'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2014/12/2015-Koenigsegg-One1-201.jpg?fill=18:11&resize=980:*',
    date: 'September 9, 2022',
  },
  {
    title: 'Mountains at night: 12 best locations to enjoy the view',
    image:
      'https://mainwebstorage.blob.core.windows.net/mediacontainers/styles/1920x1400/azure/2022-04/Pre-series%20Jesko%202.jpg?h=053a0b09&itok=uNbJxASB',
    date: 'September 12, 2022',
  },
];

export function MoreCars() {
  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}

export default MoreCars;