import React, { Children, useState } from "react";
import clsx from "classnames";
import useStyles from "./style";
import { Box } from "@mantine/core";
import { BackIcon, NextIcon } from "@components/Icons";
import { AnimatePresence, motion } from "framer-motion";
import { variants, swipePower, swipeConfidenceThreshold } from "./helper";

export interface IndicatorProps {
  active: boolean;
}

export const Indicator = ({ active }: IndicatorProps) => {
  const { classes } = useStyles();

  return (
    <div
      className={clsx(classes.pointer, {
        [classes.activePointer]: active,
        [classes.inactivePointer]: !active,
      })}
    ></div>
  );
};
export interface SlideshowProps {
  children: React.ReactNode;
}

const Index = ({ children }: SlideshowProps) => {
  const { classes } = useStyles();
  const childrenList = Children.toArray(children);
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    let currentPage = page + newDirection;

    if (currentPage < 0) currentPage = childrenList.length - 1;
    if (currentPage > childrenList.length - 1) currentPage = 0;

    setPage([currentPage, newDirection]);
  };

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.header}>
          <BackIcon onClick={() => paginate(-1)} />
          <NextIcon onClick={() => paginate(1)} />
        </Box>
        <AnimatePresence>
          <div className={classes.content}>
            {
              childrenList.map((item, index) => (
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial='enter'
                  animate='center'
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag='x'
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                >
                  {item}
                </motion.div>
              ))[page]
            }
          </div>
        </AnimatePresence>
        <Box className={classes.indicatorContent}>
          {childrenList.map((item, index) => (
            <Indicator key={index} active={index === page} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Index;
