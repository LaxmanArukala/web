import React from "react";
import { Breadcrumbs, Typography, Link as MuiLink } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  to?: string; // optional: if not provided, it’s the current (active) page
}

interface BreadcrumbsNavProps {
  items: BreadcrumbItem[];
}

const BreadcrumbsNav: React.FC<BreadcrumbsNavProps> = ({ items }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {items.map((item, index) =>
        item.to ? (
          <MuiLink
            key={index}
            component={Link}
            to={item.to}
            color="inherit"
            underline="hover"
          >
            {item.label}
          </MuiLink>
        ) : (
          <Typography key={index} sx={{ color: "text.primary" }}>
            {item.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
