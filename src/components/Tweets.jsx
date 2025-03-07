import CreateTweet from './CreateTweet'
import Tweet from './Tweet'
import { useContext } from 'react'
import { PostsContext } from '../App'
import { UserContext } from '../App'

export default function Tweets() {

const { tweets } = useContext(PostsContext)
const { theme } = useContext(UserContext)

  return (
        <main>
            <div className={theme === 'dark' ? 'top-bar dark' : 'top-bar'}>
                <h2 className="title">Home</h2>
            </div>

            <CreateTweet />

            <div className="show-more-tweets">
                <p>Show 35 Tweets</p>
            </div>

            {tweets.map((tweet, index) => <Tweet tweet={tweet} key={index} />)}
        </main>
    )
}
