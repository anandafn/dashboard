import Header from "../../components/Header";
import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently ask questions page" />

      {/* Question 1 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nisi ut asperiores quas minus iste laudantium voluptatem, harum
            itaque quis fuga cum error qui unde necessitatibus beatae reiciendis
            perspiciatis tenetur?
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Question 2 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another important questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nisi ut asperiores quas minus iste laudantium voluptatem, harum
            itaque quis fuga cum error qui unde necessitatibus beatae reiciendis
            perspiciatis tenetur?
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Question 3 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your favorite question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nisi ut asperiores quas minus iste laudantium voluptatem, harum
            itaque quis fuga cum error qui unde necessitatibus beatae reiciendis
            perspiciatis tenetur?
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Question 4 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Just random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nisi ut asperiores quas minus iste laudantium voluptatem, harum
            itaque quis fuga cum error qui unde necessitatibus beatae reiciendis
            perspiciatis tenetur?
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Question 5 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Funky question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nisi ut asperiores quas minus iste laudantium voluptatem, harum
            itaque quis fuga cum error qui unde necessitatibus beatae reiciendis
            perspiciatis tenetur?
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Question 6 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Still have a question?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nisi ut asperiores quas minus iste laudantium voluptatem, harum
            itaque quis fuga cum error qui unde necessitatibus beatae reiciendis
            perspiciatis tenetur?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
