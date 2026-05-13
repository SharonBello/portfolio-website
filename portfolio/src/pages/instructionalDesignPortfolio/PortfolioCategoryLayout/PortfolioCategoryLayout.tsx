import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Typography, Breadcrumbs, Link, Tooltip, IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Categories } from "../portfolioHelper";
import "./PortfolioCategoryLayout.scss";

interface PortfolioCategoryLayoutProps {
    children: React.ReactNode;
}

const PortfolioCategoryLayout: React.FC<PortfolioCategoryLayoutProps> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const stripRef = useRef<HTMLDivElement>(null);

    const currentCategory = Categories.find((cat) => cat.route === location.pathname);

    const scroll = (direction: "left" | "right") => {
        if (stripRef.current) {
            stripRef.current.scrollBy({ left: direction === "left" ? -250 : 250, behavior: "smooth" });
        }
    };

    return (
        <Box className="portfolio-layout">

            {/* ── Sticky: Breadcrumbs + Category Strip ── */}
            <Box className="portfolio-sticky-top">
                <Box className="portfolio-breadcrumb-bar">
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <Link underline="hover" className="breadcrumb-link" onClick={() => navigate("/")}>Home</Link>
                        <Link underline="hover" className="breadcrumb-link" onClick={() => navigate("/instructional-design-portfolio")}>Portfolio</Link>
                        {currentCategory && (
                            <Typography className="breadcrumb-current">{currentCategory.title}</Typography>
                        )}
                    </Breadcrumbs>
                </Box>

                <Box className="category-strip-outer">
                    <IconButton className="strip-arrow" onClick={() => scroll("left")}>
                        <ChevronLeftIcon />
                    </IconButton>

                    <Box className="category-strip" ref={stripRef}>
                        {Categories.map((cat) => {
                            const isActive = cat.route === location.pathname;
                            return (
                                <Tooltip key={cat.route} title={cat.description} arrow placement="bottom">
                                    <Box
                                        className={`category-chip ${isActive ? "active" : ""}`}
                                        onClick={() => navigate(cat.route)}
                                    >
                                        <img src={cat.image} alt={cat.title} className="category-chip-img" />
                                        <Typography className="category-chip-label">{cat.title}</Typography>
                                    </Box>
                                </Tooltip>
                            );
                        })}
                    </Box>

                    <IconButton className="strip-arrow" onClick={() => scroll("right")}>
                        <ChevronRightIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* ── Page Content ── */}
            <Box className="portfolio-page-content">{children}</Box>
        </Box>
    );
};

export default PortfolioCategoryLayout;