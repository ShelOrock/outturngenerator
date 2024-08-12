import React, { useState } from "react";

import Button from "../components/Button";
import Chip from "../components/Chip";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import { Row, Column } from "../components/LayoutComponents";
import Paper from "../components/Paper";
import Select from "../components/Select";
import * as Typography from "../components/Typography";
import TextArea from "../components/TextArea";
import Icon from "../components/Icon";
import ASSETS from "../assets";
import IconButton from "../components/IconButton";
import Grid from "../components/Grid";
import { Card } from "../components/Card";
import List from "../components/List";

import { Styles } from "../enums";

interface ComponentProps {};

const ComponentTest: React.FC<ComponentProps> = () => {

  const [ inputTest, setInputTest ] = useState("");
  const [ checkboxTest, setCheckboxTest ] = useState(false);
  const [ selectTest, setSelectTest ] = useState("");
  const [ textAreaTest, setTextAreaTest ] = useState("");

  const [ extraSmallInput, setExtraSmallInput ] = useState("");
  const [ smallInput, setSmallInput ] = useState("");
  const [ mediumInput, setMediumInput ] = useState("");
  const [ largeInput, setLargeInput ] = useState("");
  const [ extraLargeInput, setExtraLargeInput ] = useState("");
  const [ fullInput, setFullInput ] = useState("");

  const TYPOGRAPHY_WEIGHT_DATA = [
    { weight: Styles.FontWeights.thin, text: "Thin" },
    { weight: Styles.FontWeights.extraLight, text: "Extra Light" },
    { weight: Styles.FontWeights.light, text: "Light" },
    { weight: Styles.FontWeights.regular, text: "Regular" },
    { weight: Styles.FontWeights.medium, text: "Medium" },
    { weight: Styles.FontWeights.semiBold, text: "Semi Bold" },
    { weight: Styles.FontWeights.bold, text: "Bold" },
    { weight: Styles.FontWeights.extraBold, text: "Extra Bold" },
    { weight: Styles.FontWeights.black, text: "Black" },
  ];

  const GREEN_CHIP_GRID_DATA = [
    { id: 1, text: "Green 700" },
    { id: 2, text: "Green 600" },
    { id: 3, text: "Green 500" },
    { id: 4, text: "Green 400" },
    { id: 5, text: "Green 300" },
    { id: 6, text: "Green 200" },
    { id: 7, text: "Green 100" },
    { id: 8, text: "Green 50" },
    { id: 9, text: "Green 0" },
  ];

  const PINK_CHIP_GRID_DATA = [
    { id: 1, text: "Pink 700" },
    { id: 2, text: "Pink 600" },
    { id: 3, text: "Pink 500" },
    { id: 4, text: "Pink 400" },
    { id: 5, text: "Pink 300" },
    { id: 6, text: "Pink 200" },
    { id: 7, text: "Pink 100" },
    { id: 8, text: "Pink 50" },
    { id: 9, text: "Pink 0" },
  ];

  const BLUE_CHIP_GRID_DATA = [
    { id: 1, text: "Blue 700" },
    { id: 2, text: "Blue 600" },
    { id: 3, text: "Blue 500" },
    { id: 4, text: "Blue 400" },
    { id: 5, text: "Blue 300" },
    { id: 6, text: "Blue 200" },
    { id: 7, text: "Blue 100" },
    { id: 8, text: "Blue 50" },
    { id: 9, text: "Blue 0" },
  ];

  const YELLOW_CHIP_GRID_DATA = [
    { id: 1, text: "Yellow 700" },
    { id: 2, text: "Yellow 600" },
    { id: 3, text: "Yellow 500" },
    { id: 4, text: "Yellow 400" },
    { id: 5, text: "Yellow 300" },
    { id: 6, text: "Yellow 200" },
    { id: 7, text: "Yellow 100" },
    { id: 8, text: "Yellow 50" },
    { id: 9, text: "Yellow 0" },
  ];

  const RED_CHIP_GRID_DATA = [
    { id: 1, text: "Red 700" },
    { id: 2, text: "Red 600" },
    { id: 3, text: "Red 500" },
    { id: 4, text: "Red 400" },
    { id: 5, text: "Red 300" },
    { id: 6, text: "Red 200" },
    { id: 7, text: "Red 100" },
    { id: 8, text: "Red 50" },
    { id: 9, text: "Red 0" },
  ];

  const GRAYSCALE_CHIP_GRID_DATA = [
    { id: 1, text: "Grayscale 700" },
    { id: 2, text: "Grayscale 600" },
    { id: 3, text: "Grayscale 500" },
    { id: 4, text: "Grayscale 400" },
    { id: 5, text: "Grayscale 300" },
    { id: 6, text: "Grayscale 200" },
    { id: 7, text: "Grayscale 100" },
    { id: 8, text: "Grayscale 50" },
    { id: 9, text: "Grayscale 0" },
  ];

  const ICON_GRID_DATA = [
    { id: 1, path: ASSETS.addIcon },
    { id: 2, path: ASSETS.closeIcon },
    { id: 3, path: ASSETS.deleteIcon },
    { id: 4, path: ASSETS.expandLessIcon },
    { id: 5, path: ASSETS.expandMoreIcon },
    { id: 6, path: ASSETS.favoriteIcon },
    { id: 7, path: ASSETS.filterIcon },
    { id: 8, path: ASSETS.sortIcon },
    { id: 9, path: ASSETS.successIcon }
  ];

  const ICON_SIZE_GRID_DATA = [
    { id: 1, size: "xs" },
    { id: 2, size: "sm" },
    { id: 3, size: "md" },
    { id: 4, size: "lg" },
    { id: 5, size: "xl" },
  ];

  const ICON_COLOR_GRID_DATA = [
    { id: 1, color: Styles.Colors.success },
    { id: 2, color: Styles.Colors.info },
    { id: 3, color: Styles.Colors.warning },
    { id: 4, color: Styles.Colors.danger },
    { id: 5, color: Styles.Colors.neutral },
    { id: 6, color: Styles.Colors.primary }
  ];

  const CARD_GRID_DATA = [
    { id: 1, heading: "Card Heading", subheading: "Card Subheading", body: "Card Body. Lorem ipsum dolor sit amit non consequitur" },
    { id: 2, heading: "Card Heading", subheading: "Card Subheading", body: "Card Body. Lorem ipsum dolor sit amit non consequitur" },
    { id: 3, heading: "Card Heading", subheading: "Card Subheading", body: "Card Body. Lorem ipsum dolor sit amit non consequitur" },
    { id: 4, heading: "Card Heading", subheading: "Card Subheading", body: "Card Body. Lorem ipsum dolor sit amit non consequitur" },
    { id: 5, heading: "Card Heading", subheading: "Card Subheading", body: "Card Body. Lorem ipsum dolor sit amit non consequitur" },
    { id: 6, heading: "Card Heading", subheading: "Card Subheading", body: "Card Body. Lorem ipsum dolor sit amit non consequitur" },
    { id: 7, heading: "Card Heading", subheading: "Card Subheading", body: "Card Body. Lorem ipsum dolor sit amit non consequitur" },
    { id: 8, heading: "Card Heading", subheading: "Card Subheading", body: "Card Body. Lorem ipsum dolor sit amit non consequitur" },
  ];
  
  return (
    <Column padding={ Styles.Spacing.large }>
      <Row mt={ Styles.Spacing.large }>
        <Column>
          <Typography.Title ml={ Styles.Spacing.medium }>Title</Typography.Title>
          <Typography.Subtitle ml={ Styles.Spacing.medium }>Subtitle</Typography.Subtitle>
          <Typography.Heading ml={ Styles.Spacing.medium }>Heading</Typography.Heading>
          <Typography.Subheading ml={ Styles.Spacing.medium }>Subheading</Typography.Subheading>
          <Typography.Body ml={ Styles.Spacing.medium }>Body</Typography.Body>
        </Column>
        <List
          componentData={ TYPOGRAPHY_WEIGHT_DATA }
          renderComponent={ ({ weight, text }) => (
            <Typography.Body
              weight={ weight }
              ml={ Styles.Spacing.medium }
            >{ text }</Typography.Body>
          ) }
          ml="md"
        />
      </Row>
      <Row mt={ Styles.Spacing.large } alignItems={ Styles.Layout.AlignItems.center }>
        <Input 
          type="text"
          id="inputTest"
          name="inputTest"
          value={ inputTest }
          placeholder="Input Test"
          onChange={ e => setInputTest(e.target.value) }
          mr={ Styles.Spacing.small }
        />
        <Checkbox
          id="checkboxTest"
          name="checkboxTest"
          checked={ checkboxTest }
          onChange= { () => setCheckboxTest(!checkboxTest) }
          mr={ Styles.Spacing.small }
        />
        <Select
          id="selectTest"
          name="selectTest"
          value={ selectTest }
          onChange={ e => setSelectTest(e.target.value) }
          options={ [] }
          mr={ Styles.Spacing.small }
        />
      </Row>
      <TextArea
        id="textAreaTest"
        name="textAreaTest"
        value={ textAreaTest }
        placeholder="Text Area Test"
        onChange={ e => setTextAreaTest(e.target.value) }
        width="lg"
        mt={ Styles.Spacing.small }
      />
      <Column
        width="full"
        mt={ Styles.Spacing.large }
      >
        <Input 
          type="text"
          id="extraSmallInput"
          name="extraSmallInput"
          value={ extraSmallInput }
          placeholder="Extra Small Input - 16px"
          onChange={ e => setExtraSmallInput(e.target.value) }
          width="xs"
        />
        <Input 
          type="text"
          id="smallInput"
          name="smallInput"
          value={ smallInput }
          placeholder="Small Input - 56px"
          onChange={ e => setSmallInput(e.target.value) }
          width="sm"
          mt={ Styles.Spacing.small }
        />
        <Input 
          type="text"
          id="mediumInput"
          name="mediumInput"
          value={ mediumInput }
          placeholder="Medium Input - 144px"
          onChange={ e => setMediumInput(e.target.value) }
          width="md"
          mt={ Styles.Spacing.small }
        />
        <Input 
          type="text"
          id="largeInput"
          name="largeInput"
          value={ largeInput }
          placeholder="Large Input - 256px"
          onChange={ e => setLargeInput(e.target.value) }
          width="lg"
          mt={ Styles.Spacing.small }
        />
        <Input 
          type="text"
          id="extraLargeInput"
          name="extraLargeInput"
          value={ extraLargeInput }
          placeholder="Extra Large Input - 400px"
          onChange={ e => setExtraLargeInput(e.target.value) }
          width="xl"
          mt={ Styles.Spacing.small }
        />
        <Input 
          type="text"
          id="fullInput"
          name="fullInput"
          value={ fullInput }
          placeholder="Full Input - 400px"
          onChange={ e => setFullInput(e.target.value) }
          width="full"
          mt={ Styles.Spacing.small }
        />
      </Column>
      <Row mt={ Styles.Spacing.large }>
        <Button
          onClick={ () => {} }
          variant={ Styles.ButtonVariants.primary } 
          color={ Styles.Colors.primary }
          mr={ Styles.Spacing.small }
        >primary</Button>
        <Button
          onClick={ () => {} }
          variant={ Styles.ButtonVariants.secondary }
          color={ Styles.Colors.primary }
          mr={ Styles.Spacing.small }
        >secondary</Button>
        <Button
          onClick={ () => {} } 
          variant={ Styles.ButtonVariants.tertiary }
          color={ Styles.Colors.primary }
          mr={ Styles.Spacing.small }
        >tertiary</Button>
      </Row>
      <Row mt={ Styles.Spacing.large }>
        <Grid
          componentData={ GREEN_CHIP_GRID_DATA }
          renderComponent={ ({ text }) => (
            <Chip
              color={ Styles.Colors.primary }
              mt={ Styles.Spacing.small }
              mr={ Styles.Spacing.small }
            >{ text }</Chip>
          ) }
        />
        <Grid
          componentData={ PINK_CHIP_GRID_DATA }
          renderComponent={ ({ text }) => (
            <Chip
              color={ Styles.Colors.info }
              mt={ Styles.Spacing.small }
              mr={ Styles.Spacing.small }
            >{ text }</Chip>
          ) }
        />
        <Grid
          componentData={ BLUE_CHIP_GRID_DATA }
          renderComponent={ ({ text }) => (
            <Chip
              color={ Styles.Colors.warning }
              mt={ Styles.Spacing.small }
              mr={ Styles.Spacing.small }
            >{ text }</Chip>
          ) }
        />
        <Grid
          componentData={ YELLOW_CHIP_GRID_DATA }
          renderComponent={ ({ text }) => (
            <Chip
              color={ Styles.Colors.danger }
              mt={ Styles.Spacing.small }
              mr={ Styles.Spacing.small }
            >{ text }</Chip>
          ) }
        />
        <Grid
          componentData={ GRAYSCALE_CHIP_GRID_DATA }
          renderComponent={ ({ text }) => (
            <Chip
              color={ Styles.Colors.neutral }
              mt={ Styles.Spacing.small }
              mr={ Styles.Spacing.small }
            >{ text }</Chip>
          ) }
        /> 
      </Row>

      <Grid
        componentData={ ICON_GRID_DATA }
        renderComponent={ ({ path }) => (
          <Icon
            path={ path }
            color={ Styles.Colors.primary }
            size="sm"
          />
        ) }
        mt={ Styles.Spacing.large }
      />
      <Grid
        componentData={ ICON_SIZE_GRID_DATA }
        renderComponent={ ({ size }) => (
          <Icon
            path={ ASSETS.favoriteIcon }
            color={ Styles.Colors.primary }
            size={ size }
          />
        )}
        mt={ Styles.Spacing.large }
      />
      <Grid
        componentData={ ICON_COLOR_GRID_DATA }
        renderComponent={ ({ color }) => (
          <Icon
            path={ ASSETS.favoriteIcon }
            color={ color }
            size="sm"
          />
        ) }
        mt={ Styles.Spacing.large }
      />

      <Column
        width="full"
        mt={ Styles.Spacing.large }
      >
        <Paper
          width="xs"
          mt={ Styles.Spacing.medium }
          padding={ Styles.Spacing.medium }
        >Extra Small Paper - 144px</Paper>
        <Paper
          width="sm"
          mt={ Styles.Spacing.medium }
          padding={ Styles.Spacing.medium }
        >Small Paper - 256px</Paper>
        <Paper
          width="md"
          mt={ Styles.Spacing.medium }
          padding={ Styles.Spacing.medium }
        >Medium Paper - 360px</Paper>
        <Paper
          width="lg"
          mt={ Styles.Spacing.medium }
          padding={ Styles.Spacing.medium }
        >Large Paper - 444px</Paper>
        <Paper
          width="xl"
          mt={ Styles.Spacing.medium }
          padding={ Styles.Spacing.medium }
        >Extra Large Paper - 600px</Paper>
        <Paper
          width="full"
          mt={ Styles.Spacing.medium }
          padding={ Styles.Spacing.medium }
        >Full Width Paper - 100%</Paper>
      </Column>

      <Row mt={ Styles.Spacing.large }>
        <IconButton
          path={ ASSETS.favoriteIcon }
          onClick={ () => {} }
          variant={ Styles.ButtonVariants.primary }
          color={ Styles.Colors.primary }
          mr={ Styles.Spacing.small }
        >Primary primary</IconButton>
        <IconButton
          path={ ASSETS.favoriteIcon }
          onClick={ () => {} }
          variant={ Styles.ButtonVariants.primary }
          color={ Styles.Colors.info }
          mr={ Styles.Spacing.small }
        >Info primary</IconButton>
        <IconButton
          path={ ASSETS.favoriteIcon }
          onClick={ () => {} }
          variant={ Styles.ButtonVariants.primary }
          color={ Styles.Colors.warning }
          mr={ Styles.Spacing.small }
        >Warning primary</IconButton>
        <IconButton
          path={ ASSETS.favoriteIcon }
          onClick={ () => {} }
          variant={ Styles.ButtonVariants.primary }
          color={ Styles.Colors.danger }
          mr={ Styles.Spacing.small }
        >Danger primary</IconButton>
        <IconButton
          path={ ASSETS.favoriteIcon }
          onClick={ () => {} }
          variant={ Styles.ButtonVariants.primary }
          color={ Styles.Colors.neutral }
        >Neutral primary</IconButton>
      </Row>
      <Row mt={ Styles.Spacing.medium }>
        <IconButton
          path={ ASSETS.favoriteIcon }
          onClick={ () => {} }
          variant={ Styles.ButtonVariants.secondary }
          color={ Styles.Colors.primary }
          mr={ Styles.Spacing.small }
        >Primary secondary</IconButton>
        <IconButton
          path={ ASSETS.favoriteIcon }
          onClick={ () => {} }
          variant={ Styles.ButtonVariants.secondary }
          color={ Styles.Colors.info }
          mr={ Styles.Spacing.small }
        >Info secondary</IconButton>
        <IconButton
          path={ ASSETS.favoriteIcon }
          onClick={ () => {} }
          variant={ Styles.ButtonVariants.secondary }
          color={ Styles.Colors.warning }
          mr={ Styles.Spacing.small }
        >Warning secondary</IconButton>
        <IconButton
          path={ ASSETS.favoriteIcon }
          onClick={ () => {} }
          variant={ Styles.ButtonVariants.secondary }
          color={ Styles.Colors.danger }
          mr={ Styles.Spacing.small }
        >Danger secondary</IconButton>
        <IconButton
          path={ ASSETS.favoriteIcon }
          onClick={ () => {} }
          variant={ Styles.ButtonVariants.secondary }
          color={ Styles.Colors.neutral }
        >Neutral secondary</IconButton>
      </Row>

      <Row mt={ Styles.Spacing.large }>
        <Grid
          componentData={ CARD_GRID_DATA }
          renderComponent={ ({
            heading,
            subheading,
            body,
          }) => (
            <Card
              heading={ heading }
              subheading={ subheading }
              body={ body }
              actions={ 
                <Row
                  justifyContent={ Styles.Layout.JustifyContent.spaceBetween }
                  mt={ Styles.Spacing.small }
                >
                  <Button
                    variant={ Styles.ButtonVariants.primary }
                    color={ Styles.Colors.primary }
                    onClick={ () => {} }
                  >Test Button</Button>
                  <Button
                    variant={ Styles.ButtonVariants.tertiary }
                    color={ Styles.Colors.danger }
                    onClick={ () => {} }
                    ml={ Styles.Spacing.extraSmall }
                  >Test Button</Button>
                </Row> 
              }
              mt={ Styles.Spacing.medium }
              mr={ Styles.Spacing.medium }
              padding={ Styles.Spacing.medium }
            />
          ) }
          col={ 4 }
        />
      </Row>
    </Column>
  )
};

export default ComponentTest;
