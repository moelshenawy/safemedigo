import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import styles from '../index.module.scss';
import { Box, Container, Typography } from "@mui/material";
import { Tags } from "@/components";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

export default function BlogPage({ page, blogs }) {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(router.query.page)

  const handleChangePage = (event, newPage) => {
    router.push(`/blogs/page/${newPage}`);

    if (newPage === 1) {
      router.push(`/blogs/`);
    }

    console.log(newPage, "NEW PAGE NUM")

  };

  console.log(page
    , "NEW PAGE NUssssssssssssssssssssssM")

  const count = blogs.count / 6;
  const newCount = Math.floor(count);
  return (
    <div>



      <div id={styles.tags_filter}>
        <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>


          <div className={styles.filter}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-autowidth-label">
                Articles
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                IconComponent={ExpandMoreOutlinedIcon}
                label="Articles"
                style={{
                  backgroundColor: "#E7EDEC",
                  color: "#000000",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                <MenuItem value="Acibadem">Acibadem Articles</MenuItem>
                <MenuItem value="Acibadem">Acibadem Articles</MenuItem>
                <MenuItem value="Acibadem">Acibadem Articles</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Container>
      </div>


      <div className={styles.sections_container}>
        <section id={styles.blogs_sec}>
          <Container sx={{ maxWidth: "1239px" }} maxWidth={false}>
            <div className={styles.title}>
              <Typography variant="h6">Most Recent Posts</Typography>
            </div>

            <div className={styles.boxes_container}>
              {blogs.data.map((post, idx) => (
                <>
                  <Link href={`/blogs/${post.title.split(' ').join('-')}`} className={styles.box} key={idx}>
                    <div className={styles.img_container}>
                      <img
                        src={post.image}
                        alt="Picture of the author"
                        width="width: 344px"
                      />
                    </div>
                    <div className={styles.box_title}>
                      <Typography variant="h5">{post.title}</Typography>
                    </div>

                    <div className={styles.desc}>
                      <p>{post.briefContent}</p>
                    </div>

                    <div className={styles.author_container}>
                      <div className={styles.img_container}>
                        <img src={post.authorImg} alt="" />
                      </div>

                      <div className={styles.author_data}>
                        <div className={styles.user_name}>
                          {post.authorName}
                        </div>
                        <div className={styles.user_job}>{post.authorJob}</div>
                      </div>
                    </div>

                    <div className={styles.btns_container}>
                      <div className={styles.trans_btn}>
                        <button>Tag Name</button>
                      </div>

                    </div>
                  </Link>
                </>
              ))}
            </div>
            <Box sx={{
              display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: "center", marginTop: '50px',
              '& ul > li> button:not(.Mui-selected)': { color: '#004747', fontWeight: 'bold', fontSize: '14px' },
              '& ul > li> .Mui-selected': { backgroundColor: '#004747', color: '#ffffff', fontWeight: 'bold', fontSize: '18px' }

            }} className="pagination">
              <Pagination
                count={newCount}
                page={page}
                onChange={handleChangePage}
                size="large"
              />

            </Box>
          </Container>
        </section>

        {/* Tag Component */}
        <Tags />
      </div>






    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query.page, "COntext Over hereee")

  const res = await fetch("http://safemedigoapi-001-site1.gtempurl.com/api/v1/Blog/GetAllBlogWithPage", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "lang": 'ar',
      "blogCategoryId": 0,
      "currentPage": context.query.page
    })
  })
  const data = await res.json()

  return {
    props: {
      blogs: data
    }
  }
}
