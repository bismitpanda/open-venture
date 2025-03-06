import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export interface TestimonialProps {
  rating: number;
  text: string;
  author: string;
  date: string;
  avatarUrl: string;
}

export function TestimonialCard({
  rating,
  text,
  author,
  date,
  avatarUrl,
}: TestimonialProps) {
  return (
    <Card className="min-w-[300px] mx-4">
      <CardContent>
        <div className="flex mb-2">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
        </div>
        <p className="text-gray-600 mb-4">{text}</p>
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src={avatarUrl} />
          </Avatar>
          <div className="ml-3">
            <p className="font-medium">{author}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
