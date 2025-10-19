import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUp, 
  ArrowDown, 
  MessageCircle, 
  User, 
  Clock, 
  Heart,
  Reply,
  Flag,
  Share2,
  Bookmark,
  Award
} from 'lucide-react';

const DiscussionDetailsPage = () => {
  const { id } = useParams();
  const [newReply, setNewReply] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [votes, setVotes] = useState<{[key: string]: number}>({});
  const [userVotes, setUserVotes] = useState<{[key: string]: 'up' | 'down' | null}>({});
  const [likes, setLikes] = useState<{[key: string]: number}>({});
  const [userLikes, setUserLikes] = useState<{[key: string]: boolean}>({});

  // Mock discussion data
  const discussion = {
    id: 1,
    title: "What are my rights during a police interrogation?",
    author: "Anonymous User",
    authorType: "Member",
    category: "Criminal Law",
    content: `I was recently questioned by police about an incident in my neighborhood. They didn't arrest me, but they asked me to come to the station for questioning. I went voluntarily, but during the questioning, I started to feel uncomfortable with some of their questions.

I'm wondering:
1. What are my constitutional rights during police questioning?
2. Should I have asked for a lawyer immediately?
3. Can I leave if I'm not under arrest?
4. What should I do if this happens again?

I've heard about Miranda rights, but I'm not sure when they apply. The officers were polite, but some questions seemed designed to trip me up. I didn't admit to anything, but I'm worried I might have said something that could be misinterpreted.

Any advice would be greatly appreciated. I want to be prepared if this situation arises again.`,
    timeAgo: "2 hours ago",
    views: 156,
    votes: 15,
    replies: 8,
    tags: ["rights", "interrogation", "criminal-defense", "miranda-rights"],
    isAnswered: true,
    isSolved: true
  };

  const replies = [
    {
      id: 1,
      author: "Sarah Johnson, Esq.",
      authorType: "Verified Lawyer",
      specialty: "Criminal Defense Attorney",
      content: `Great question! You have several important constitutional rights during police questioning:

**Your Rights:**
1. **Right to Remain Silent** - You can refuse to answer questions at any time
2. **Right to an Attorney** - You can request a lawyer before or during questioning
3. **Right to Leave** - If you're not under arrest, you can leave at any time

**When Miranda Rights Apply:**
Miranda warnings are only required when you are:
- In custody (not free to leave), AND
- Being interrogated

**My Recommendations:**
- Always ask "Am I free to leave?" if unsure of your status
- If you feel uncomfortable, politely say "I'd like to speak with an attorney"
- Never feel pressured to answer questions without legal representation

Remember: Anything you say can be used against you, even in seemingly casual conversation with officers.`,
      timeAgo: "1 hour ago",
      votes: 23,
      likes: 12,
      isAccepted: true,
      replies: [
        {
          id: 11,
          author: "Anonymous User",
          authorType: "Member",
          content: "Thank you so much for this detailed explanation! This is exactly what I needed to know. Should I be worried about the questioning that already happened?",
          timeAgo: "45 minutes ago",
          votes: 5,
          likes: 3
        },
        {
          id: 12,
          author: "Sarah Johnson, Esq.",
          authorType: "Verified Lawyer",
          content: "If you didn't admit to any wrongdoing and were truthful, you're likely fine. However, if you're concerned about potential charges, consider consulting with a local criminal defense attorney for a case-specific evaluation.",
          timeAgo: "30 minutes ago",
          votes: 8,
          likes: 4
        }
      ]
    },
    {
      id: 2,
      author: "LegalEagle2024",
      authorType: "Law Student",
      content: `I'm a 3L law student, and we just covered this in Criminal Procedure! A few additional points:

- Police can lie to you during questioning (unfortunately, this is legal)
- You don't have to sign anything
- If you invoke your right to remain silent, be clear and unambiguous: "I am invoking my right to remain silent"
- The same goes for requesting an attorney: "I want to speak with an attorney"

The key is being clear and direct. Ambiguous statements like "Maybe I should talk to a lawyer" might not be enough to invoke your rights.`,
      timeAgo: "50 minutes ago",
      votes: 18,
      likes: 7,
      replies: []
    },
    {
      id: 3,
      author: "ExCop_NowLawyer",
      authorType: "Verified Lawyer",
      specialty: "Former Police Officer, Criminal Defense",
      content: `As someone who was a police officer for 10 years before becoming a defense attorney, I can offer a unique perspective:

**From the Police Side:**
- Officers are trained to build rapport and make you comfortable
- They may use psychological techniques to encourage talking
- "Voluntary" questioning can still be intimidating

**Red Flags to Watch For:**
- Questions that seem to assume guilt
- Repeated questions about the same topic
- Pressure to "clear things up" or "tell your side"

**Bottom Line:** When in doubt, ask for a lawyer. It's not an admission of guilt - it's smart legal protection.`,
      timeAgo: "35 minutes ago",
      votes: 31,
      likes: 15,
      replies: [
        {
          id: 31,
          author: "CuriousReader",
          authorType: "Member",
          content: "This is fascinating insight! How often do people actually invoke their rights in your experience?",
          timeAgo: "20 minutes ago",
          votes: 3,
          likes: 1
        }
      ]
    }
  ];

  const handleVote = (itemId: string, voteType: 'up' | 'down') => {
    const currentVote = userVotes[itemId];
    let newVote: 'up' | 'down' | null = voteType;
    let voteChange = 0;

    if (currentVote === voteType) {
      // Remove vote
      newVote = null;
      voteChange = voteType === 'up' ? -1 : 1;
    } else if (currentVote) {
      // Change vote
      voteChange = voteType === 'up' ? 2 : -2;
    } else {
      // New vote
      voteChange = voteType === 'up' ? 1 : -1;
    }

    setUserVotes(prev => ({ ...prev, [itemId]: newVote }));
    setVotes(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + voteChange }));
  };

  const handleLike = (itemId: string) => {
    const isLiked = userLikes[itemId];
    setUserLikes(prev => ({ ...prev, [itemId]: !isLiked }));
    setLikes(prev => ({ ...prev, [itemId]: (prev[itemId] || 0) + (isLiked ? -1 : 1) }));
  };

  const handleReply = (replyId?: number) => {
    if (newReply.trim()) {
      // In a real app, this would make an API call
      console.log('Reply submitted:', newReply, 'to:', replyId || 'main thread');
      setNewReply('');
      setReplyingTo(null);
    }
  };

  const renderReply = (reply: any, isNested = false) => {
    const replyVotes = votes[`reply-${reply.id}`] || reply.votes || 0;
    const replyLikes = likes[`reply-${reply.id}`] || reply.likes || 0;
    const userVote = userVotes[`reply-${reply.id}`];
    const userLike = userLikes[`reply-${reply.id}`];

    return (
      <div key={reply.id} className={`${isNested ? 'ml-8 border-l-2 border-gray-200 pl-4' : ''}`}>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-start space-x-4">
            {/* Vote Section */}
            <div className="flex flex-col items-center space-y-1 min-w-[50px]">
              <button 
                onClick={() => handleVote(`reply-${reply.id}`, 'up')}
                className={`p-1 rounded transition-colors ${
                  userVote === 'up' ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-blue-600'
                }`}
              >
                <ArrowUp className="h-4 w-4" />
              </button>
              <span className="font-semibold text-sm">{replyVotes}</span>
              <button 
                onClick={() => handleVote(`reply-${reply.id}`, 'down')}
                className={`p-1 rounded transition-colors ${
                  userVote === 'down' ? 'text-red-600 bg-red-50' : 'text-gray-400 hover:text-red-600'
                }`}
              >
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-medium text-gray-900">{reply.author}</span>
                {reply.authorType === 'Verified Lawyer' && (
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4 text-blue-500" />
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      Verified Lawyer
                    </span>
                  </div>
                )}
                {reply.specialty && (
                  <span className="text-xs text-gray-500">• {reply.specialty}</span>
                )}
                <span className="text-xs text-gray-500">• {reply.timeAgo}</span>
                {reply.isAccepted && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    ✓ Accepted Answer
                  </span>
                )}
              </div>

              <div className="prose prose-sm max-w-none text-gray-700 mb-4">
                {reply.content.split('\n').map((paragraph: string, index: number) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return <h4 key={index} className="font-semibold text-gray-900 mt-3 mb-1">{paragraph.slice(2, -2)}</h4>;
                  }
                  if (paragraph.startsWith('- ')) {
                    return <li key={index} className="ml-4">{paragraph.slice(2)}</li>;
                  }
                  return paragraph ? <p key={index} className="mb-2">{paragraph}</p> : <br key={index} />;
                })}
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4 text-sm">
                <button 
                  onClick={() => handleLike(`reply-${reply.id}`)}
                  className={`flex items-center space-x-1 transition-colors ${
                    userLike ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${userLike ? 'fill-current' : ''}`} />
                  <span>{replyLikes}</span>
                </button>
                <button 
                  onClick={() => setReplyingTo(reply.id)}
                  className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Reply className="h-4 w-4" />
                  <span>Reply</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors">
                  <Flag className="h-4 w-4" />
                  <span>Report</span>
                </button>
              </div>

              {/* Reply Form */}
              {replyingTo === reply.id && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <textarea
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    placeholder="Write your reply..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                  <div className="flex justify-end space-x-2 mt-2">
                    <button 
                      onClick={() => setReplyingTo(null)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => handleReply(reply.id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Nested Replies */}
        {reply.replies && reply.replies.length > 0 && (
          <div className="mt-4 space-y-4">
            {reply.replies.map((nestedReply: any) => renderReply(nestedReply, true))}
          </div>
        )}
      </div>
    );
  };

  const mainVotes = votes['main'] || discussion.votes;
  const userMainVote = userVotes['main'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/discussions" 
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Discussions
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Discussion */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-start space-x-6">
            {/* Vote Section */}
            <div className="flex flex-col items-center space-y-2 min-w-[60px]">
              <button 
                onClick={() => handleVote('main', 'up')}
                className={`p-2 rounded transition-colors ${
                  userMainVote === 'up' ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-blue-600'
                }`}
              >
                <ArrowUp className="h-6 w-6" />
              </button>
              <span className="font-bold text-lg">{mainVotes}</span>
              <button 
                onClick={() => handleVote('main', 'down')}
                className={`p-2 rounded transition-colors ${
                  userMainVote === 'down' ? 'text-red-600 bg-red-50' : 'text-gray-400 hover:text-red-600'
                }`}
              >
                <ArrowDown className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {discussion.category}
                  </span>
                  {discussion.isSolved && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      ✓ Solved
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-4">{discussion.title}</h1>

              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {discussion.author}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {discussion.timeAgo}
                </div>
                <div>{discussion.views} views</div>
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {discussion.replies} replies
                </div>
              </div>

              <div className="prose max-w-none text-gray-700 mb-6">
                {discussion.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {discussion.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Replies Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {replies.length} {replies.length === 1 ? 'Reply' : 'Replies'}
          </h2>
          
          <div className="space-y-6">
            {replies.map(reply => renderReply(reply))}
          </div>
        </div>

        {/* Add Reply Form */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Answer</h3>
          <textarea
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            placeholder="Share your legal knowledge or experience..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={6}
          />
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-500">
              Please ensure your answer is helpful and follows community guidelines.
            </p>
            <button 
              onClick={() => handleReply()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Post Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionDetailsPage;