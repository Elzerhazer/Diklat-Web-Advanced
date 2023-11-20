import { Container, Title, Text, Button } from "@mantine/core";
import classes from "@/styles/Dashboard.module.css";

export function Dashboard() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "yellow" }}>
                Really Fast
              </Text>{" "}
              Car in The World
            </Title>

            <Text className={classes.description} mt={30}>
              The Agera R built upon the features and functionality of the Agera
              with new, unique solutions to enhance both performance and visual
              appearance even further.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: "pink", to: "yellow" }}
              size="xl"
              className={classes.control}
              mt={40}>
              Let's Get Started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
