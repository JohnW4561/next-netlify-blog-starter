import Layout from '@components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">Welcome to this biking blog!</h1>

        <p className="description">
         This is a little project I put together to talk about this new sport I'm getting into called trail biking.
        </p>

        <p>
          I am fairly new to trail biking but I am enjoying it immensely so far.  My plan is to build this blog while I am learning to document what I am learning and to share with others.
        </p>
      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
