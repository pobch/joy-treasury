import React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

interface CardSocialReplyProps {}

export default function CardSocialReply({}: CardSocialReplyProps) {
  return (
    <Card variant="plain" sx={{ boxShadow: "none", "--Card-radius": "20px" }}>
      <CardContent orientation="horizontal">
        <Avatar
          alt="Shawn Carter"
          src="https://mui.com/static/images/avatar/1.jpg"
        />

        <Box sx={{ minWidth: 0 }}>
          <Sheet
            sx={{
              bgcolor: "#f5f5f6",
              borderRadius: 16,
              p: 1.5,
            }}
          >
            <Stack spacing={0.5}>
              <Typography level="title-md" fontWeight="lg">
                Shawn Carter
              </Typography>
              <Typography level="body-md">
                Also understand that, as humans, design can be emotional and
                stimulate the playful brain.
              </Typography>
            </Stack>
          </Sheet>
          <Box sx={{ pl: 1.5, pt: 1 }}>
            <Stack direction={"row"} spacing={1} alignItems={"end"}>
              <Link component="button" level="title-sm" color="neutral">
                Reply
              </Link>
              <Link component="button" level="title-sm" color="neutral">
                React
              </Link>
              <Typography level="body-xs" sx={{ color: "#9597A1" }}>
                47 min ago
              </Typography>
            </Stack>
            <Link
              component="button"
              color="neutral"
              level="title-sm"
              fontWeight="lg"
              sx={{ pt: 1, color: "text.primary" }}
            >
              Show 37 more replies
            </Link>
            <Stack spacing={1} sx={{ pt: 1.25 }}>
              {[...new Array(3)].map((_, index) => (
                <Stack
                  direction={"row"}
                  spacing={1}
                  alignItems={"center"}
                  key={index}
                >
                  <Avatar
                    alt="avatar1"
                    src="https://mui.com/static/images/avatar/3.jpg"
                    sx={{ width: 24, height: 24 }}
                  />
                  <Typography
                    level="title-sm"
                    fontWeight="lg"
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    Elsa Hosk
                  </Typography>

                  <Typography level="body-xs" noWrap>
                    Took a trip to LA last Took a trip to LA last
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
