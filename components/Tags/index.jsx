import { Container, Typography } from "@mui/material";
import Link from 'next/link';
import React from 'react'
import styles from './index.module.scss'
const Tags = () => {
  const tags = [
    { tag: "All" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
    { tag: "Tag name" },
  ];
  return (
    <section id={styles.tags}>
      <Container sx={{ maxWidth: "1239px", }} maxWidth={false}>
        <div className={styles.title}>
          <Typography variant="h6">Popular Tags</Typography>
        </div>

        <div className={styles.tags_container}>
          {tags.map((tag, idx) => (
            <>
              <div className={styles.tag} key={idx}>
                <Link href={tag.tag}>
                  <button>{tag.tag}</button>
                </Link>
              </div>
            </>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Tags