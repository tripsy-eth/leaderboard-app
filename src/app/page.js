import LeaderboardComponent from '@/components/leaderboard';
import Layout from '@/components/layout';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <Layout>
        <LeaderboardComponent
          actionId="b9f4efd8d8eb4c4cbbb3845bd738064d"
        />
      </Layout>
    </main>
  );
}