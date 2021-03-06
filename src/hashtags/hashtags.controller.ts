import { Controller, Get, Param } from '@nestjs/common';
import { getHashes } from 'crypto';

@Controller('hashtags')
export class HashtagsController {
    @Get('/')
    getHashtags(): string {
        // TODO: add actual logic
        return 'all top hashtags';
    }
    
    @Get('/:tag/posts')
    getPostsForHashtag(@Param() param): string{
        return `show all posts with hashtag ${param.tag}`;
    }
}